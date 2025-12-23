<template>
  <div id="app">
    <nav class="nav-bar">
      <router-link to="/wind" class="nav-link">风场</router-link>
      <router-link to="/typhoon" class="nav-link">台风</router-link>
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

.page-container {
  flex: 1;
  position: relative;
  overflow: hidden;
}
</style>
