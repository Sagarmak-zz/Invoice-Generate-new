<template>
  <div class="bill">
    Bill
  </div>
</template>
<script>
export default {
  name: "Bill",
  computed: {
    bills() {
      return this.$store.getters.bills;
    }
  }
};
</script>
