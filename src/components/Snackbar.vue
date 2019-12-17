<template>
  <div class="snackbar">
    <v-snackbar v-model="status" :color="getSnackbarData.color" :timeout="getSnackbarData.timeout" top>
      <span> {{ getSnackbarData.text }} </span>
      <v-icon v-if="getSnackbarData.icon" flat>
        {{ getSnackbarData.icon }}
      </v-icon>
    </v-snackbar>
  </div>
</template>
<script>
export default {
  name: "Snackbar",
  data: () => ({
    status: false
  }),
  computed: {
    snackbar() {
      return this.$store.getters.snackbar;
    },
    getSnackbarData() {
      if (!this.snackbar || !this.snackbar.status) {
        return {};
      }

      this.status = true;

      return {
        timeout: this.snackbar.timeout || 4000,
        color: this.snackbar && this.snackbar.color ? this.snackbar.color : "success",
        icon: this.snackbar.icon || "",
        text: this.snackbar.text || ""
      };
    }
  }
};
</script>
<style lang="scss">
.snackbar {
  font-family: "Open Sans";

  .v-snack__content {
    display: text;
    align-items: center;
    justify-content: center;
  }
  .v-icon {
    margin-left: 0.5rem;
  }
}
</style>
