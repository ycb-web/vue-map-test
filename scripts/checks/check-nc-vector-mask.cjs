const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root = path.resolve(__dirname, '../..');
const source = fs.readFileSync(path.join(root, 'src/utils/leaflet-vector-scalar.js'), 'utf8');
const start = source.indexOf('L.VectorArrowLayer =');
const end = source.indexOf('L.vectorArrowLayer =', start);
const L = {
  CanvasLayer: { extend: definition => definition },
  point: (x, y) => ({ x, y }),
  latLng: (lat, lng) => ({ lat, lng }),
};
vm.runInNewContext(source.slice(start, end), { L });

const header = { nx: 2, ny: 2, lo1: 110, lo2: 110.075, la1: 23, la2: 22.925 };
const failures = [];
let checks = 0;
function check(name, test) {
  try { test(); checks++; } catch (error) { failures.push(`${name}: ${error.message}`); }
}
function render(uData, vData, options = {}) {
  const calls = [];
  let clears = 0;
  const map = {
    getZoom: () => 10,
    latLngToContainerPoint: () => ({ x: 0.5, y: 0.5 }),
    getPixelOrigin: () => ({ add: () => ({ x: 0, y: 0 }) }),
    containerPointToLayerPoint: () => ({ x: 0, y: 0 }),
    unproject: () => ({ lng: 110 + 0.75 * 0.075, lat: 23 - 0.75 * 0.075 }),
  };
  const layer = Object.create(L.VectorArrowLayer);
  Object.assign(layer, {
    header, uData, vData,
    options: { ...L.VectorArrowLayer.options, gridSize: 2, ...options },
    _drawArrow: (...args) => calls.push(args.slice(1)),
  });
  const ctx = { clearRect() { clears++; } };
  layer.onDrawLayer({ canvas: { width: 1, height: 1, getContext: () => ctx }, layer: { _map: map } });
  assert.equal(clears, 1, 'clear the previous frame before sampling');
  return calls;
}

for (const options of [{ alignToGrid: false }, { alignToGrid: true }, { autoGridZoom: 10 }]) {
  const mode = JSON.stringify(options);
  check(`${mode} valid interpolation`, () => {
    const calls = render([4, 8, 12, 16], [2, 4, 6, 8], options);
    assert.equal(calls.length, 1);
    assert.ok(Math.abs(calls[0][2] - (options.alignToGrid || options.autoGridZoom ? 10 : 13)) < 1e-9);
  });
  check(`${mode} valid zero component`, () => assert.equal(render([0, 0, 0, 0], [4, 4, 4, 4], options).length, 1));
  for (const missing of [null, undefined, NaN, Infinity, -Infinity]) {
    for (const component of ['u', 'v']) {
      for (let corner = 0; corner < 4; corner++) {
        check(`${mode} ${component}[${corner}]=${String(missing)}`, () => {
          const u = [4, 4, 4, 4];
          const v = [2, 2, 2, 2];
          (component === 'u' ? u : v)[corner] = missing;
          assert.equal(render(u, v, options).length, 0, 'missing corners must not produce arrows');
        });
      }
    }
  }
  check(`${mode} all land`, () => assert.equal(render([null, null, null, null], [null, null, null, null], options).length, 0));
}

function pageMethod(page, name, next) {
  const text = fs.readFileSync(path.join(root, `src/views/${page}/index.vue`), 'utf8');
  const begin = text.indexOf(`    ${name}(latlng) {`);
  const finish = text.indexOf(`    ${next}(`, begin);
  return vm.runInNewContext(`({${text.slice(begin, finish)}})`)[name];
}
const sampleWind = pageMethod('NcWindRangePage', 'sampleWindAtLatLng', 'getBeaufortLevelInfo');
const records = (u, v) => [
  { header: { ...header, parameterNumber: 2 }, data: u },
  { header: { ...header, parameterNumber: 3 }, data: v },
];
const location = fraction => ({ lng: 110 + fraction * 0.075, lat: 23 - fraction * 0.075 });
const windContext = { getBeaufortLevelInfo: () => ({}) };
check('popup agrees with arrows on a missing nearest point', () => {
  windContext.currentWindData = records([4, 4, 4, null], [2, 2, 2, null]);
  assert.equal(sampleWind.call(windContext, location(0.75)).isLand, true);
  assert.equal(render([4, 4, 4, null], [2, 2, 2, null]).length, 0);
});
check('popup never replaces missing coastal corners with zero', () => {
  windContext.currentWindData = records([4, 4, 4, null], [2, 2, 2, null]);
  assert.equal(sampleWind.call(windContext, location(0.25)).isNoData, true);
});
check('popup checks V as well as U', () => {
  windContext.currentWindData = records([4, 4, 4, 4], [2, 2, 2, null]);
  assert.equal(sampleWind.call(windContext, location(0.75)).isLand, true);
});
check('popup preserves valid interpolation', () => {
  windContext.currentWindData = records([0, 0, 0, 0], [4, 4, 4, 4]);
  assert.equal(sampleWind.call(windContext, location(0.75)).speed, 4);
});

const sampleWave = pageMethod('NcWaveRangePage', 'sampleWaveAtLatLng', 'getWaveScaleInfo');
const waveContext = { getWaveScaleInfo: () => ({}) };
for (const missing of [null, undefined, NaN, Infinity, -Infinity]) {
  for (const component of ['hs', 'u', 'v']) {
    for (let corner = 0; corner < 4; corner++) {
      check(`wave popup ${component}[${corner}]=${String(missing)}`, () => {
        const data = { hs: [2, 2, 2, 2], u: [4, 4, 4, 4], v: [2, 2, 2, 2] };
        data[component][corner] = missing;
        waveContext.currentWaveData = [
          { header: { ...header, parameterNumberName: 'hs' }, data: data.hs },
          ...records(data.u, data.v),
        ];
        const sample = sampleWave.call(waveContext, location(0.75));
        assert.equal(corner === 3 ? sample.isLand : sample.isNoData, true);
      });
    }
  }
}
check('wave popup preserves valid zero height and zero U', () => {
  waveContext.currentWaveData = [
    { header: { ...header, parameterNumberName: 'hs' }, data: [0, 0, 0, 0] },
    ...records([0, 0, 0, 0], [4, 4, 4, 4]),
  ];
  const sample = sampleWave.call(waveContext, location(0.75));
  assert.equal(sample.hs, 0);
  assert.equal(sample.direction, 180);
});
check('wave popup preserves scalar-only input', () => {
  waveContext.currentWaveData = [{ header: { ...header, parameterNumberName: 'hs' }, data: [2, 2, 2, 2] }];
  assert.equal(sampleWave.call(waveContext, location(0.75)).hs, 2);
});
check('queued canvas move ignores a removed layer', () => {
  const begin = source.indexOf('L.CanvasLayer =');
  const finish = source.indexOf('L.canvasLayer =', begin);
  const canvasL = { Layer: { extend: definition => definition } };
  vm.runInNewContext(source.slice(begin, finish), { L: canvasL });
  assert.doesNotThrow(() => canvasL.CanvasLayer._onLayerDidMove.call({ _map: null, _canvas: null }));
  assert.doesNotThrow(() => canvasL.CanvasLayer._onLayerDidMove.call({ _map: {}, _canvas: null }));
});

if (failures.length) {
  console.error(`${failures.length} failed; ${checks} passed. First failures:\n${failures.slice(0, 8).join('\n')}`);
  process.exitCode = 1;
} else {
  console.log(`vector mask: ${checks} checks passed (both sampling modes, auto zoom, U/V/Hs missing values, wind/wave popup agreement)`);
}
