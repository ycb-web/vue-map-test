<template>
  <div class="building-flood-page">
    <div class="page-shell">
      <div class="page-header">
        <div class="page-kicker">Three.js Demo</div>
        <h1 class="page-title">桥梁贴体淹没演示</h1>
        <p class="page-desc">
          现在这页已经换成真实 `GLB` 桥梁模型。页面会把本地桥模型载入场景，
          再用统一上涨的水面和接触高亮带，演示“水位贴着桥体上涨”的效果。
        </p>
        <div class="mode-tabs">
          <button
            type="button"
            class="mode-tab"
            :class="{ active: activeMode === 'three' }"
            @click="activeMode = 'three'"
          >
            Three.js Demo
          </button>
          <button
            type="button"
            class="mode-tab"
            :class="{ active: activeMode === 'cesium' }"
            @click="activeMode = 'cesium'"
          >
            Cesium Demo
          </button>
        </div>
      </div>

      <CesiumFloodPane v-if="activeMode === 'cesium'" />
      <template v-else>
      <div class="hero-card">
        <div class="hero-copy">
          <div class="hero-eyebrow">Local GLB</div>
          <h2 class="hero-title">Turku Kurala Bridge</h2>
          <p class="hero-desc">
            模型文件来自你刚下载的本地 `GLB`，当前已复制到项目 `public` 目录中。
            页面不再使用程序化房屋模型。
          </p>
        </div>

        <div class="hero-metrics">
          <div class="metric">
            <div class="metric-label">当前水位</div>
            <div class="metric-value">{{ waterLevelText }}</div>
          </div>
          <div class="metric">
            <div class="metric-label">模型状态</div>
            <div class="metric-value">{{ modelStatusText }}</div>
          </div>
          <div class="metric">
            <div class="metric-label">展示模式</div>
            <div class="metric-value">{{ autoPlay ? "自动上涨" : "手动观察" }}</div>
          </div>
        </div>
      </div>

      <div class="control-card">
        <div class="control-main">
          <label class="slider-label" for="water-level-range">水位滑杆</label>
          <input
            id="water-level-range"
            class="slider"
            type="range"
            :min="waterLevelMin"
            :max="waterLevelMax"
            :step="0.1"
            :value="waterLevel"
            @input="handleWaterLevelInput"
          >
          <div class="slider-scale">
            <span>{{ waterLevelMin.toFixed(1) }} m</span>
            <span>{{ waterLevelMax.toFixed(1) }} m</span>
          </div>
        </div>

        <div class="control-actions">
          <button type="button" class="action-btn primary" @click="toggleAutoPlay">
            {{ autoPlay ? "暂停上涨" : "继续上涨" }}
          </button>
          <button type="button" class="action-btn" @click="resetScene">重置水位</button>
        </div>
      </div>

      <div class="demo-grid">
        <div class="viewport-card">
          <div ref="viewport" class="viewport"></div>
          <div class="viewport-badge">
            鼠标左键旋转，滚轮缩放，右键平移
          </div>
        </div>

        <div class="info-card">
          <div class="section-title">当前效果</div>
          <div class="info-line">桥体使用真实 `GLB` 模型，本地加载，不依赖外网。</div>
          <div class="info-line">半透明水面是统一上涨的演示层，用来表达漫淹过程。</div>
          <div class="info-line">之前那圈蓝色线框是调试用接触框，已经去掉，避免把模型自带地形底座一起框进去。</div>

          <div class="section-title section-gap">模型信息</div>
          <div class="building-row">
            <div>
              <div class="building-name">桥梁模型</div>
              <div class="building-sub">jaaninoja_bridge_in_turku_kurala_finland.glb</div>
            </div>
            <div class="building-depth" :class="{ flooded: modelLoaded }">
              {{ modelLoaded ? "已接入" : "加载中" }}
            </div>
          </div>
          <div class="building-row">
            <div>
              <div class="building-name">桥底参考高</div>
              <div class="building-sub">用于计算接触高亮带的位置</div>
            </div>
            <div class="building-depth" :class="{ flooded: waterLevel > contactBandBaseY }">
              {{ contactBandBaseY.toFixed(1) }} m
            </div>
          </div>
          <div class="building-row">
            <div>
              <div class="building-name">接触区高度</div>
              <div class="building-sub">当前不再显示额外线框，避免误导</div>
            </div>
            <div class="building-depth" :class="{ flooded: waterLevel > contactBandBaseY }">
              {{ waterLevel > contactBandBaseY ? `${contactBandHeight.toFixed(1)} m` : "未接触" }}
            </div>
          </div>

          <div class="section-title section-gap">说明</div>
          <div class="info-line">这仍然是可视化演示，不是数值水动力模拟。</div>
          <div class="info-line">如果后面你要更真实，可以继续接 DEM、桥梁控制点或外部求解结果。</div>
        </div>
      </div>
      </template>
    </div>
  </div>
</template>

<script>
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import CesiumFloodPane from "./components/CesiumFloodPane.vue";

const MODEL_URL = "/data/building-flood/jaaninoja_bridge_in_turku_kurala_finland.glb";

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function terrainHeight(x, z) {
  return (
    Math.sin(x / 7) * 0.55 +
    Math.cos(z / 6) * 0.42 +
    Math.sin((x + z) / 9) * 0.22 -
    0.45
  );
}

function createTerrainMaterial(geometry) {
  const colors = [];
  const color = new THREE.Color();
  const positions = geometry.attributes.position;

  for (let i = 0; i < positions.count; i += 1) {
    const y = positions.getY(i);
    if (y < -0.55) {
      color.setRGB(0.72, 0.78, 0.71);
    } else if (y < 0.25) {
      color.setRGB(0.72, 0.71, 0.58);
    } else {
      color.setRGB(0.64, 0.68, 0.57);
    }
    colors.push(color.r, color.g, color.b);
  }

  geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));

  return new THREE.MeshStandardMaterial({
    vertexColors: true,
    roughness: 0.96,
    metalness: 0.02,
  });
}

function createFallbackBridge() {
  const group = new THREE.Group();

  const deck = new THREE.Mesh(
    new THREE.BoxGeometry(18, 1.2, 4.5),
    new THREE.MeshStandardMaterial({
      color: "#8d969f",
      roughness: 0.86,
      metalness: 0.08,
    })
  );
  deck.position.y = 5.4;
  group.add(deck);

  [-6.5, 0, 6.5].forEach((x) => {
    const pier = new THREE.Mesh(
      new THREE.BoxGeometry(1.6, 8.5, 1.8),
      new THREE.MeshStandardMaterial({
        color: "#c1c7ce",
        roughness: 0.92,
        metalness: 0.03,
      })
    );
    pier.position.set(x, 1.2, 0);
    group.add(pier);
  });

  return group;
}

function alignObjectBottomCenterToOrigin(object3d) {
  const bounds = new THREE.Box3().setFromObject(object3d);
  const center = new THREE.Vector3();
  bounds.getCenter(center);
  object3d.position.x -= center.x;
  object3d.position.z -= center.z;
  object3d.position.y -= bounds.min.y;
  return new THREE.Box3().setFromObject(object3d);
}

function createTextSprite(text, options = {}) {
  const {
    fontSize = 44,
    paddingX = 18,
    paddingY = 12,
    textColor = "#17354d",
    backgroundColor = "rgba(255,255,255,0.9)",
    borderColor = "rgba(23,53,77,0.16)",
    scaleX = 2.6,
    scaleY = 1.15,
  } = options;

  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  context.font = `600 ${fontSize}px Arial`;
  const metrics = context.measureText(text);
  const width = Math.ceil(metrics.width + paddingX * 2);
  const height = Math.ceil(fontSize + paddingY * 2);
  canvas.width = width;
  canvas.height = height;

  context.font = `600 ${fontSize}px Arial`;
  context.fillStyle = backgroundColor;
  context.strokeStyle = borderColor;
  context.lineWidth = 3;
  context.beginPath();
  context.roundRect(1.5, 1.5, width - 3, height - 3, 14);
  context.fill();
  context.stroke();

  context.fillStyle = textColor;
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.fillText(text, width / 2, height / 2 + 2);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  const material = new THREE.SpriteMaterial({
    map: texture,
    transparent: true,
    depthTest: false,
  });
  const sprite = new THREE.Sprite(material);
  sprite.scale.set(scaleX, scaleY, 1);
  return sprite;
}

export default {
  name: "BuildingFloodDemoPage",
  components: {
    CesiumFloodPane,
  },
  data() {
    return {
      activeMode: "three",
      autoPlay: true,
      waterLevel: -1,
      waterLevelMin: -1,
      waterLevelMax: 7.5,
      renderer: null,
      scene: null,
      camera: null,
      controls: null,
      loader: null,
      waterMesh: null,
      terrainMesh: null,
      bridgeGroup: null,
      bridgeBounds: null,
      fallbackBridge: null,
      contactBandBaseY: 1.2,
      animationId: 0,
      resizeHandler: null,
      clock: null,
      modelLoaded: false,
      modelError: "",
    };
  },
  computed: {
    waterLevelText() {
      return `${this.waterLevel.toFixed(1)} m`;
    },
    modelStatusText() {
      if (this.modelLoaded) {
        return "本地GLB";
      }
      return this.modelError ? "回退桥体" : "加载中";
    },
    contactBandHeight() {
      return clamp(this.waterLevel - this.contactBandBaseY, 0, 3.2);
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.initScene();
    });
  },
  beforeDestroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
    if (this.controls) {
      this.controls.dispose();
    }
    if (this.renderer) {
      this.renderer.dispose();
    }
    if (this.resizeHandler) {
      window.removeEventListener("resize", this.resizeHandler);
    }
  },
  methods: {
    initScene() {
      const container = this.$refs.viewport;
      if (!container) {
        return;
      }

      this.scene = new THREE.Scene();
      this.scene.background = new THREE.Color("#dbe8f2");
      this.scene.fog = new THREE.Fog("#dbe8f2", 70, 160);

      const width = container.clientWidth || 960;
      const height = container.clientHeight || 560;

      this.camera = new THREE.PerspectiveCamera(48, width / height, 0.1, 500);
      this.camera.position.set(24, 20, 32);

      this.renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: false,
      });
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      this.renderer.setSize(width, height);
      this.renderer.outputColorSpace = THREE.SRGBColorSpace;
      container.appendChild(this.renderer.domElement);

      this.controls = new OrbitControls(this.camera, this.renderer.domElement);
      this.controls.enableDamping = true;
      this.controls.target.set(0, 0, 0);
      this.controls.maxPolarAngle = Math.PI / 2.05;
      this.controls.minDistance = 14;
      this.controls.maxDistance = 120;

      this.loader = new GLTFLoader();
      this.clock = new THREE.Clock();

      this.buildLights();
      this.buildTerrain();
      this.buildWater();
      this.buildGuide();
      this.buildFallbackBridge();
      this.loadBridgeModel();

      this.resizeHandler = () => {
        this.handleResize();
      };
      window.addEventListener("resize", this.resizeHandler);

      this.animate();
    },
    buildLights() {
      const hemiLight = new THREE.HemisphereLight("#f9fdff", "#65727a", 1.22);
      const sunLight = new THREE.DirectionalLight("#fff4d6", 1.3);
      sunLight.position.set(28, 34, 22);

      const fillLight = new THREE.DirectionalLight("#dcecff", 0.5);
      fillLight.position.set(-16, 18, -20);

      this.scene.add(hemiLight, sunLight, fillLight);
    },
    buildTerrain() {
      const geometry = new THREE.PlaneGeometry(130, 130, 90, 90);
      geometry.rotateX(-Math.PI / 2);
      const positions = geometry.attributes.position;

      for (let i = 0; i < positions.count; i += 1) {
        const x = positions.getX(i);
        const z = positions.getZ(i);
        positions.setY(i, terrainHeight(x, z));
      }

      geometry.computeVertexNormals();
      this.terrainMesh = new THREE.Mesh(geometry, createTerrainMaterial(geometry));
      this.scene.add(this.terrainMesh);
    },
    buildWater() {
      const geometry = new THREE.PlaneGeometry(150, 150, 1, 1);
      geometry.rotateX(-Math.PI / 2);

      const material = new THREE.MeshPhysicalMaterial({
        color: "#2d9bf0",
        transparent: true,
        opacity: 0.34,
        roughness: 0.08,
        metalness: 0.02,
        transmission: 0.12,
        clearcoat: 0.2,
        depthWrite: false,
      });

      this.waterMesh = new THREE.Mesh(geometry, material);
      this.waterMesh.position.y = this.waterLevel;
      this.scene.add(this.waterMesh);
    },
    buildGuide() {
      const grid = new THREE.GridHelper(140, 20, "#7d8da1", "#b9c4d0");
      grid.position.y = -0.02;
      grid.material.opacity = 0.2;
      grid.material.transparent = true;
      this.scene.add(grid);

      const guideGroup = new THREE.Group();
      guideGroup.position.set(0, 0, 0);

      const axisLength = 22;
      const arrowHeadLength = 1.2;
      const arrowHeadWidth = 0.62;
      const xArrow = new THREE.ArrowHelper(
        new THREE.Vector3(1, 0, 0),
        new THREE.Vector3(0, 0, 0),
        axisLength,
        0xe65050,
        arrowHeadLength,
        arrowHeadWidth
      );
      const yArrow = new THREE.ArrowHelper(
        new THREE.Vector3(0, 1, 0),
        new THREE.Vector3(0, 0, 0),
        axisLength,
        0x3aa65c,
        arrowHeadLength,
        arrowHeadWidth
      );
      const zArrow = new THREE.ArrowHelper(
        new THREE.Vector3(0, 0, 1),
        new THREE.Vector3(0, 0, 0),
        axisLength,
        0x2a7de1,
        arrowHeadLength,
        arrowHeadWidth
      );
      guideGroup.add(xArrow, yArrow, zArrow);

      const xLabel = createTextSprite("X");
      xLabel.position.set(axisLength + 1.2, 0.45, 0);
      const yLabel = createTextSprite("Y");
      yLabel.position.set(0, axisLength + 1.1, 0);
      const zLabel = createTextSprite("Z");
      zLabel.position.set(0, 0.45, axisLength + 1.2);
      guideGroup.add(xLabel, yLabel, zLabel);

      const axisLineMaterial = new THREE.LineBasicMaterial({
        color: 0x7f8ea0,
        transparent: true,
        opacity: 0.72,
      });
      const tickValues = [];
      for (let value = -1; value <= Math.ceil(this.waterLevelMax) + 1; value += 1) {
        tickValues.push(value);
      }
      tickValues.forEach((value) => {
        const points = [
          new THREE.Vector3(-0.28, value, 0),
          new THREE.Vector3(0.28, value, 0),
        ];
        const tickGeometry = new THREE.BufferGeometry().setFromPoints(points);
        const tickLine = new THREE.Line(tickGeometry, axisLineMaterial);
        guideGroup.add(tickLine);

        const label = createTextSprite(`${value}m`, {
          fontSize: 34,
          paddingX: 14,
          paddingY: 10,
          scaleX: 2.35,
          scaleY: 0.95,
        });
        label.position.set(-2.25, value, 0);
        guideGroup.add(label);
      });

      this.scene.add(guideGroup);
    },
    buildFallbackBridge() {
      this.fallbackBridge = createFallbackBridge();
      this.bridgeBounds = alignObjectBottomCenterToOrigin(this.fallbackBridge);
      this.contactBandBaseY = this.bridgeBounds.min.y + Math.min(this.bridgeBounds.max.y - this.bridgeBounds.min.y, 7) * 0.18;
      this.fallbackBridge.visible = false;
      this.scene.add(this.fallbackBridge);
      this.updateFloodPresentation();
    },
    loadBridgeModel() {
      this.loader.load(
        MODEL_URL,
        (gltf) => {
          const source = gltf.scene || gltf.scenes[0];
          this.applyBridgeModel(source);
        },
        undefined,
        (error) => {
          console.warn("bridge model load failed, fallback bridge will be used", error);
          this.modelError = error && error.message ? error.message : "load failed";
          this.fallbackBridge.visible = true;
          this.bridgeGroup = this.fallbackBridge;
          this.modelLoaded = false;
          this.controls.target.set(0, 0, 0);
          this.updateFloodPresentation();
        }
      );
    },
    applyBridgeModel(source) {
      if (!source) {
        return;
      }

      const bridge = source.clone(true);
      bridge.traverse((child) => {
        if (!child.isMesh) {
          return;
        }
        child.castShadow = false;
        child.receiveShadow = true;
        if (child.material && child.material.clone) {
          child.material = child.material.clone();
        }
      });

      const sourceBox = new THREE.Box3().setFromObject(bridge);
      const sourceSize = new THREE.Vector3();
      const sourceCenter = new THREE.Vector3();
      sourceBox.getSize(sourceSize);
      sourceBox.getCenter(sourceCenter);

      const targetLength = 42;
      const dominantSize = Math.max(sourceSize.x || 1, sourceSize.z || 1);
      const scale = targetLength / dominantSize;
      bridge.scale.setScalar(scale);

      const scaledBox = new THREE.Box3().setFromObject(bridge);
      const scaledCenter = new THREE.Vector3();
      const scaledSize = new THREE.Vector3();
      scaledBox.getCenter(scaledCenter);
      scaledBox.getSize(scaledSize);

      bridge.rotation.y = Math.PI / 2;
      alignObjectBottomCenterToOrigin(bridge);

      this.scene.add(bridge);
      this.bridgeGroup = bridge;
      this.bridgeBounds = new THREE.Box3().setFromObject(bridge);
      const centeredHeight = this.bridgeBounds.max.y - this.bridgeBounds.min.y;
      this.contactBandBaseY = this.bridgeBounds.min.y + Math.min(centeredHeight * 0.18, 1.4);

      this.modelLoaded = true;
      this.fallbackBridge.visible = false;
      this.controls.target.set(0, 0, 0);
      this.updateFloodPresentation();
    },
    updateFloodPresentation() {
      if (this.waterMesh) {
        this.waterMesh.position.y = this.waterLevel;
      }
    },
    animate() {
      const delta = this.clock ? this.clock.getDelta() : 0.016;

      if (this.autoPlay) {
        const nextLevel = this.waterLevel + delta * 0.55;
        this.waterLevel =
          nextLevel > this.waterLevelMax ? this.waterLevelMin : nextLevel;
        this.updateFloodPresentation();
      }

      if (this.waterMesh && this.waterMesh.material) {
        const wave = Math.sin(performance.now() * 0.001) * 0.035;
        this.waterMesh.rotation.z = wave;
      }

      if (this.controls) {
        this.controls.update();
      }
      if (this.renderer && this.scene && this.camera) {
        this.renderer.render(this.scene, this.camera);
      }

      this.animationId = requestAnimationFrame(this.animate);
    },
    handleResize() {
      const container = this.$refs.viewport;
      if (!container || !this.renderer || !this.camera) {
        return;
      }
      const width = container.clientWidth || 960;
      const height = container.clientHeight || 560;
      this.camera.aspect = width / height;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(width, height);
    },
    handleWaterLevelInput(event) {
      this.autoPlay = false;
      this.waterLevel = Number(event.target.value);
      this.updateFloodPresentation();
    },
    toggleAutoPlay() {
      this.autoPlay = !this.autoPlay;
    },
    resetScene() {
      this.autoPlay = false;
      this.waterLevel = this.waterLevelMin;
      this.updateFloodPresentation();
      if (this.controls) {
        this.controls.reset();
      }
    },
  },
};
</script>

<style scoped>
.building-flood-page {
  min-height: 100%;
  padding: 18px;
  background:
    radial-gradient(circle at top right, rgba(27, 133, 243, 0.12), transparent 22%),
    linear-gradient(180deg, #f4f8fc 0%, #edf2f7 100%);
}

.page-shell {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.page-header {
  padding: 8px 2px 2px;
}

.page-kicker {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #2a79bf;
}

.page-title {
  margin: 10px 0 12px;
  font-size: 28px;
  line-height: 1.2;
  color: #18364c;
}

.page-desc {
  max-width: 920px;
  font-size: 14px;
  line-height: 1.8;
  color: #567086;
}

.mode-tabs {
  display: flex;
  gap: 10px;
  margin-top: 16px;
}

.mode-tab {
  appearance: none;
  border: 1px solid rgba(19, 48, 72, 0.12);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.82);
  color: #17354d;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 10px 16px;
  cursor: pointer;
}

.mode-tab.active {
  background: linear-gradient(135deg, #0f89ff 0%, #22a7ff 100%);
  color: #fff;
  border-color: transparent;
}

.hero-card,
.control-card,
.viewport-card,
.info-card {
  border-radius: 20px;
  border: 1px solid rgba(19, 48, 72, 0.08);
  box-shadow: 0 16px 34px rgba(23, 53, 84, 0.1);
}

.hero-card {
  display: grid;
  grid-template-columns: minmax(0, 1.5fr) minmax(280px, 0.9fr);
  gap: 18px;
  padding: 22px 24px;
  background:
    radial-gradient(circle at top right, rgba(36, 143, 255, 0.16), transparent 34%),
    linear-gradient(135deg, #fcfeff 0%, #eef5fb 100%);
}

.hero-eyebrow {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #2a79bf;
}

.hero-title {
  margin: 8px 0 10px;
  font-size: 28px;
  line-height: 1.2;
  color: #16334a;
}

.hero-desc {
  margin: 0;
  max-width: 760px;
  font-size: 14px;
  line-height: 1.8;
  color: #567086;
}

.hero-metrics {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
}

.metric {
  padding: 14px 15px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.84);
  border: 1px solid rgba(19, 48, 72, 0.08);
}

.metric-label {
  font-size: 12px;
  color: #6d8395;
  margin-bottom: 8px;
}

.metric-value {
  font-size: 22px;
  font-weight: 700;
  color: #143249;
}

.control-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 16px 18px;
  background: rgba(255, 255, 255, 0.88);
}

.control-main {
  flex: 1;
  min-width: 0;
}

.slider-label {
  display: block;
  margin-bottom: 8px;
  font-size: 13px;
  font-weight: 600;
  color: #17354d;
}

.slider {
  width: 100%;
}

.slider-scale {
  display: flex;
  justify-content: space-between;
  margin-top: 6px;
  font-size: 12px;
  color: #688094;
}

.control-actions {
  display: flex;
  gap: 10px;
}

.action-btn {
  appearance: none;
  border: 1px solid rgba(19, 48, 72, 0.12);
  border-radius: 999px;
  background: #fff;
  color: #17354d;
  font-size: 13px;
  font-weight: 600;
  padding: 10px 16px;
  cursor: pointer;
}

.action-btn.primary {
  background: linear-gradient(135deg, #0f89ff 0%, #22a7ff 100%);
  border-color: transparent;
  color: #fff;
}

.demo-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.6fr) minmax(320px, 0.8fr);
  gap: 14px;
}

.viewport-card {
  position: relative;
  overflow: hidden;
  background:
    radial-gradient(circle at top left, rgba(74, 138, 204, 0.22), transparent 26%),
    linear-gradient(180deg, #dce8f2 0%, #f5f9fc 100%);
}

.viewport {
  width: 100%;
  height: 620px;
}

.viewport-badge {
  position: absolute;
  left: 16px;
  bottom: 16px;
  padding: 8px 12px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.88);
  color: #4a6276;
  font-size: 12px;
  border: 1px solid rgba(19, 48, 72, 0.08);
}

.info-card {
  padding: 20px 18px;
  background: rgba(255, 255, 255, 0.9);
}

.section-title {
  font-size: 15px;
  font-weight: 700;
  color: #17354d;
  margin-bottom: 10px;
}

.section-gap {
  margin-top: 20px;
}

.info-line {
  font-size: 13px;
  line-height: 1.75;
  color: #587084;
}

.building-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 12px 0;
  border-bottom: 1px solid rgba(19, 48, 72, 0.08);
}

.building-row:last-of-type {
  border-bottom: 0;
}

.building-name {
  font-size: 14px;
  font-weight: 600;
  color: #17354d;
}

.building-sub {
  margin-top: 4px;
  font-size: 12px;
  color: #678093;
}

.building-depth {
  flex: 0 0 auto;
  padding: 6px 10px;
  border-radius: 999px;
  background: #eef4f8;
  color: #607789;
  font-size: 12px;
  font-weight: 600;
}

.building-depth.flooded {
  background: rgba(23, 138, 255, 0.12);
  color: #0f74d6;
}

@media (max-width: 1120px) {
  .hero-card,
  .demo-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 820px) {
  .building-flood-page {
    padding: 14px;
  }

  .control-card {
    flex-direction: column;
    align-items: stretch;
  }

  .control-actions {
    width: 100%;
  }

  .action-btn {
    flex: 1;
  }

  .hero-metrics {
    grid-template-columns: 1fr;
  }

  .viewport {
    height: 480px;
  }
}
</style>
