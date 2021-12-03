<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js Ap111p"/>
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
  name: 'App',
  components: {
    HelloWorld: defineAsyncComponent(() => import('about/HelloWorld'))
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
