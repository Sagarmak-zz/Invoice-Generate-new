<template>
  <div class="dashboard">
    <v-row no-gutters>
      <v-col class="pa-2">
        <InfoCard :title="bills.length" :subtitle="'Bills'" />
      </v-col>
      <v-col class="pa-2">
        <InfoCard :title="chalans.length" :subtitle="'Chalans'" />
      </v-col>
      <v-col class="pa-2">
        <InfoCard :title="customers.length" :subtitle="'Customers'" />
      </v-col>
      <v-col class="pa-2">
        <InfoCard :title="products.length" :subtitle="'Products'" />
      </v-col>
    </v-row>
  </div>
</template>
<script>
import InfoCard from "@/components/InfoCard.vue";

export default {
  name: "Dashboard",
  components: {
    InfoCard
  },
  computed: {
    bills() {
      return this.$store.getters.bills;
    },
    chalans() {
      return this.$store.getters.chalans;
    },
    customers() {
      return this.$store.getters.customers;
    },
    products() {
      return this.$store.getters.products;
    }
  }
};
</script>
