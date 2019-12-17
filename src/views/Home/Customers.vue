<template>
  <div class="customers">
    <v-row>
      <v-col>
        <v-card>
          <div class="d-flex justify-space-between align-center pa-2">
            <div class="d-flex align-center">
              <v-card-title>Customers</v-card-title>
              <v-divider class="mx-4" inset vertical></v-divider>
              <v-text-field v-model="search" hide-details label="Search" class="pa-2"></v-text-field>
            </div>
            <v-btn color="primary" dark>New Customer</v-btn>
          </div>
          <v-data-table
            :headers="headers"
            :items="customizedCustomers"
            class="elevation-1"
            :search="search"
            :loading="gettingCustomers"
            hide-default-footer
          >
            <template v-slot:item.action="{ item }">
              <v-icon small class="mr-2">
                fas fa-edit
              </v-icon>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  name: "Customers",
  data() {
    return {
      search: "",
      headers: [
        { text: "Firm Name", value: "name" },
        { text: "Person Name", value: "person_name" },
        { text: "GST Number", value: "gst_number" },
        { text: "Mobile - Landline", value: "mobile-landline" },
        { text: "Actions", value: "action", sortable: false }
      ]
    };
  },
  computed: {
    gettingCustomers() {
      return this.$store.getters.gettingCustomers;
    },
    customers() {
      return this.$store.getters.customers || [];
    },
    customizedCustomers() {
      return this.customers.map(item => {
        const mobile = item.billing_mobile_number;
        const landline = item.billing_landline_number;
        return {
          ...item,
          "mobile-landline": !(mobile || landline) ? "-" : `${mobile}-${landline}`
        };
      });
    }
  }
};
</script>
