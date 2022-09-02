<template>
  <myNavbar />
</template>

<script>
import myNavbar from "./components/myNavbar.vue";

export default {
  name: "App",
  components: {
    myNavbar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}
</style>
