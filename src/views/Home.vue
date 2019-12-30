<template>
  <div class="home">
    <HomeNavbar :app-name="appName" @logout="logout" />

    <NavigationDrawer :items="items" />

    <v-content>
      <v-container fluid>
        <router-view v-if="moduleIsReady" />
        <div v-else class="d-flex justify-center align-center">
          <v-progress-circular size="50" indeterminate color="primary" />
        </div>
      </v-container>
    </v-content>
  </div>
</template>

<script>
import NavigationDrawer from "@/components/NavigationDrawer.vue";
import HomeNavbar from "@/components/HomeNavbar.vue";
import Auth from "@/packages/auth";
import config from "@/config.js";
import * as AT from "@/store/actionTypes";

export default {
  name: "Home",
  components: {
    NavigationDrawer,
    HomeNavbar
  },
  data() {
    return {
      moduleIsReady: false,
      items: [
        {
          title: "Dashboard",
          icon: "fas fa-tachometer-alt",
          route: "home.dashboard"
        },
        { title: "Bill", icon: "fas fa-file-invoice", route: "home.bill" },
        { title: "Chalan", icon: "fas fa-receipt", route: "home.chalan" },
        { title: "Customers", icon: "fas fa-user-alt", route: "home.customers" },
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
  created() {
    this.getAllDetails();
  },
  methods: {
    getAllDetails() {
      const promises = [
        this.$store.dispatch(AT.USER_DETAILS),
        this.$store.dispatch(AT.GET_CUSTOMERS),
        this.$store.dispatch(AT.GET_PRODUCTS),
        this.$store.dispatch(AT.GET_BILLS),
        this.$store.dispatch(AT.GET_CHALANS),
        this.$store.dispatch(AT.GET_STATES)
      ];
      Promise.all(promises)
        .then(values => {
          this.moduleIsReady = true;
          return values;
        })
        .catch(err => {
          this.moduleIsReady = false;
          if (err && err.response && err.response.status == 500) {
            // Show token expired message and logout
            this.$store.dispatch(AT.SNACKBAR, {
              color: "error",
              text: "Token Expired. Please sign in again to continue"
            });
          }
        });
    },
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
  div.d-flex.justify-center.align-center {
    min-height: 85vh;
  }
}
</style>
