<template>
  <div class="home">
    <NavigationDrawer :items="items" />

    <HomeNavbar :app-name="appName" @logout="logout" />

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
import Auth from "@/packages/auth";
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
          route: "home.dashboard"
        },
        { title: "Bill", icon: "fas fa-file-invoice", route: "home.bill" },
        { title: "Chalan", icon: "fas fa-receipt", route: "home.chalan" },
        {
          title: "Products",
          icon: "fas fa-file-powerpoint",
          route: "home.products"
        },
        { title: "History", icon: "fas fa-history", route: "home.history" },
        {
          title: "Reports",
          icon: "fas fa-clipboard-list",
          route: "home.reports"
        },
        { title: "Settings", icon: "fas fa-cogs", route: "home.settings" }
      ]
    };
  },
  computed: {
    appName() {
      return config.appTitle();
    }
  },
  methods: {
    logout() {
      Auth.destroyToken();
      this.$router.push({ name: "login" });
    }
  }
};
</script>
<style lang="scss">
.home {
  min-height: 94vh;
}
</style>
