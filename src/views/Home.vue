<template>
  <div class="home">
    <NavigationDrawer :items="items" />

    <HomeNavbar :app-name="appName" />

    <v-content>
      <v-container>
        <router-view />
      </v-container>
    </v-content>
  </div>
</template>

<script>
import NavigationDrawer from "@/components/NavigationDrawer.vue";
import HomeNavbar from "@/components/HomeNavbar.vue";
import config from "@/config.js";

export default {
  name: "Home",
  components: {
    NavigationDrawer,
    HomeNavbar
  },
  data() {
    return {
      items: [
        {
          title: "Dashboard",
          icon: "fas fa-tachometer-alt",
          route: "dashboard"
        },
        { title: "Bill", icon: "fas fa-file-invoice", route: "bill" },
        { title: "Chalan", icon: "fas fa-receipt", route: "chalan" },
        {
          title: "Products",
          icon: "fas fa-file-powerpoint",
          route: "products"
        },
        { title: "History", icon: "fas fa-history", route: "history" },
        { title: "Reports", icon: "fas fa-clipboard-list", route: "reports" },
        { title: "Settings", icon: "fas fa-cogs", route: "settings" }
      ]
    };
  },
  computed: {
    appName() {
      return config.appTitle();
    }
  },
  methods: {
    //
  }
};
</script>
<style lang="scss">
.home {
  min-height: 94vh;
}
</style>
