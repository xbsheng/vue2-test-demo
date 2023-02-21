<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <h1>VUE_APP_PRODUCT: {{ VUE_APP_PRODUCT }}</h1>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      VUE_APP_PRODUCT: process.env.VUE_APP_PRODUCT
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
