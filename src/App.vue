<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
import Home from "./views/Home.vue";
export default {
  name: "App",
  components: { Home },
};
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  background-color: #c0ede0;
  height: 100%;
}
</style>
