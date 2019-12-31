<template>
  <v-content>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="4">
          <v-card class="elevation-12">
            <v-toolbar color="primary" dark flat>
              <v-toolbar-title>{{ appTitle }} Billing System</v-toolbar-title>
              <v-spacer />
            </v-toolbar>
            <v-card-text>
              <v-text-field
                v-model="email"
                label="Email"
                :loading="isLoading"
                name="email"
                prepend-icon="fas fa-user-shield"
                type="text"
              />

              <v-text-field
                id="password"
                v-model="password"
                label="Password"
                :loading="isLoading"
                name="password"
                prepend-icon="fas fa-lock"
                type="password"
                @keyup.enter="login"
              />
            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn :loading="isLoading" color="primary" @click="login">Login</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
import { LOGIN } from "@/store/actionTypes";
import config from "@/config.js";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      isLoading: false
    };
  },
  computed: {
    appTitle() {
      return config.appTitle();
    }
  },
  methods: {
    login() {
      this.isLoading = true;

      const postData = {
        email: this.email,
        password: this.password
      };

      this.$store
        .dispatch(LOGIN, postData)
        .then(response => {
          if (response) {
            this.$router.push({ name: "home.dashboard" });
          }
        })
        .finally(() => (this.isLoading = false));
    }
  }
};
</script>
