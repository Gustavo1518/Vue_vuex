<template>
  <div id="app">
    <div id="nav">
      <router-link to="/"><button class="btn btn-danger">Home</button></router-link> |
      <router-link to="/about"><button class="btn btn-danger">About</button></router-link> |
      <router-link to="/Ejemplo"><button class="btn btn-danger">Ejemplo</button></router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
