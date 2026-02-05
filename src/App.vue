<template>
  <div id="app">
    <nav class="nav-bar">
      <router-link to="/test" class="nav-link">测试</router-link>
      <router-link to="/wind" class="nav-link">风场</router-link>
      <router-link to="/typhoon" class="nav-link">台风</router-link>
      <router-link to="/wms" class="nav-link">wms</router-link>
      <router-link to="/contour" class="nav-link">等值线</router-link>
      <router-link to="/edit" class="nav-link">编辑</router-link>
      <router-link to="/leader" class="nav-link">线引</router-link>
      <router-link to="/playground" class="nav-link playground-link">🎮 演练场</router-link>
    </nav>
    <div class="page-container">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
}

.nav-bar {
  height: 50px;
  background: #2c3e50;
  display: flex;
  align-items: center;
  padding: 0 20px;
  flex-shrink: 0;
  z-index: 1001;
}

.nav-link {
  color: #fff;
  text-decoration: none;
  padding: 8px 20px;
  margin-right: 10px;
  border-radius: 4px;
  transition: background 0.2s;
}

.nav-link:hover {
  background: rgba(255, 255, 255, 0.1);
}

.nav-link.router-link-active {
  background: #1890ff;
}

.playground-link {
  margin-left: auto;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.page-container {
  flex: 1;
  position: relative;
  overflow: hidden;
}
</style>
