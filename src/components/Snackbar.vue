<template>
  <div>
    <v-snackbar v-model="status" top>
      <span>
        {{ getSnackbarData.text }}
      </span>
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
      return {
        status: this.snackbar.status || true,
        timeout: this.snackbar.timeout || 4000,
        color: this.snackbar.color || "success",
        icon: this.snackbar.icon || "",
        text: this.snackbar.text || ""
      };
    }
  }
};
</script>
