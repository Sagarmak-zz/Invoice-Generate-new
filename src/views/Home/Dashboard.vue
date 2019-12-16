<template>
  <div class="dashboard">
    <v-row no-gutters>
      <v-col class="pa-2">
        <InfoCard :title="'20'" :subtitle="'Bills'" />
      </v-col>
      <v-col class="pa-2">
        <InfoCard :title="'10'" :subtitle="'Challans'" />
      </v-col>
      <v-col class="pa-2">
        <InfoCard :title="'6'" :subtitle="'Customers'" />
      </v-col>
      <v-col class="pa-2">
        <InfoCard :title="'5'" :subtitle="'Products'" />
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
  }
};
</script>
