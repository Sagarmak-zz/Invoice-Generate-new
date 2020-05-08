<template>
  <v-app-bar app color="primary" clipped-left dense dark class="home-navbar">
    <v-toolbar-title>{{ appName }} Billing System</v-toolbar-title>
    <v-spacer></v-spacer>

    <div>
      <v-btn icon @click="toggleDarkMode">
        <v-icon v-if="!isDarkMode">fas fa-moon</v-icon>
        <v-icon v-if="isDarkMode">fas fa-sun</v-icon>
      </v-btn>
    </div>
    <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn icon v-on="on">
          <v-icon>fas fa-user-circle</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item @click="$emit('logout', true)">
          <v-list-item-title>Logout</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>
<script>
export default {
  name: "HomeNavbar",
  props: {
    appName: {
      default: "",
      type: String
    }
  },
  data() {
    return {
      isDarkMode: false
    };
  },
  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
      this.$vuetify.theme.dark = this.isDarkMode;
    }
  }
};
</script>
