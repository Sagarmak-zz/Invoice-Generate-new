<template>
  <div class="products">
    Products
  </div>
</template>
<script>
export default {
  name: "Products",
  computed: {
    products() {
      return this.$store.getters.products;
    }
  }
};
</script>
