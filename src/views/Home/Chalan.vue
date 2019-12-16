<template>
  <div class="chalan">
    Chalan
  </div>
</template>
<script>
export default {
  name: "Chalan",
  computed: {
    challans() {
      return this.$store.getters.challans;
    }
  }
};
</script>
