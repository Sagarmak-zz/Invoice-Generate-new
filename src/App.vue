<template>
  <div>
    <Snackbar />
    <v-app id="app">
      <router-view />
    </v-app>
  </div>
</template>
<script>
import Snackbar from "@/components/Snackbar.vue";

export default {
  name: "App",
  components: {
    Snackbar
  }
};
</script>
<style lang="scss">
#app {
  font-family: "Raleway", sans-serif;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // color: #2c3e50;
}

* {
  padding: 0;
  margin: 0;
}
</style>
