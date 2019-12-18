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
            <v-btn color="primary" dark @click="showCustomerModal = true">New Customer</v-btn>
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
    <CustomerModal v-if="showCustomerModal" />
  </div>
</template>
<script>
import CustomerModal from "@/components/CustomerModal.vue";

export default {
  name: "Customers",
  components: {
    CustomerModal
  },
  data() {
    return {
      search: "",
      showCustomerModal: false,
      headers: [
        { text: "Firm Name", value: "name" },
        { text: "Person Name", value: "person_name" },
        { text: "GST Number", value: "gst_number" },
        { text: "Mobile - Landline", value: "mobile-landline" },
        { text: "Actions", value: "action", sortable: false }
      ],
      firmName: "",
      person_name: "",
      email: "",
      gst_number: "",
      billing_address: "",
      billing_city: "",
      billing_state_code: "",
      billing_pincode: "",
      billing_mobile_number: "",
      billing_landline_number: "",
      shipping_address: "",
      shipping_city: "",
      shipping_state_code: "",
      shipping_pincode: "",
      shipping_mobile_number: "",
      shipping_landline_number: ""
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
  },
  methods: {
    addCustomer() {
      const data = {
        name: this.name,
        person_name: this.person_name,
        email: this.email,
        gst_number: this.gst_number,
        billing_address: this.billing_address,
        billing_city: this.billing_city,
        billing_state_code: this.billing_state_code,
        billing_pincode: this.billing_pincode,
        billing_mobile_number: this.billing_mobile_number,
        billing_landline_number: this.billing_landline_number,
        shipping_address: this.shipping_address,
        shipping_city: this.shipping_city,
        shipping_state_code: this.shipping_state_code,
        shipping_pincode: this.shipping_pincode,
        shipping_mobile_number: this.shipping_mobile_number,
        shipping_landline_number: this.shipping_landline_number
      };
      this.$store.dispatch(AT.ADD_CUSTOMER, data);
    },
    editCustomer() {
      const data = {
        name: this.name,
        person_name: this.person_name,
        email: this.email,
        gst_number: this.gst_number,
        billing_address: this.billing_address,
        billing_city: this.billing_city,
        billing_state_code: this.billing_state_code,
        billing_pincode: this.billing_pincode,
        billing_mobile_number: this.billing_mobile_number,
        billing_landline_number: this.billing_landline_number,
        shipping_address: this.shipping_address,
        shipping_city: this.shipping_city,
        shipping_state_code: this.shipping_state_code,
        shipping_pincode: this.shipping_pincode,
        shipping_mobile_number: this.shipping_mobile_number,
        shipping_landline_number: this.shipping_landline_number
      };
      this.$store.dispatch(AT.EDIT_CUSTOMER, data);
    }
  }
};
</script>
