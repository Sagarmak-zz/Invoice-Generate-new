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
            <v-btn color="primary" dark @click="addCustomerModal">New Customer</v-btn>
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
              <v-icon small class="mr-2" @click="editCustomerModal(item)">
                fas fa-edit
              </v-icon>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
    <CustomerModal
      v-if="showCustomerModal"
      :data="modalData"
      :loading="isFormLoading"
      @product-modal="prodcutModalHandler"
    />
  </div>
</template>
<script>
import CustomerModal from "@/components/CustomerModal.vue";
import * as AT from "@/store/actionTypes";

export default {
  name: "Customers",
  components: {
    CustomerModal
  },
  data() {
    return {
      search: "",
      showCustomerModal: false,
      isFormLoading: false,
      headers: [
        { text: "Firm Name", value: "name" },
        { text: "Person Name", value: "person_name" },
        { text: "GST Number", value: "gst_number" },
        { text: "Mobile - Landline", value: "mobile-landline" },
        { text: "Actions", value: "action", sortable: false }
      ],
      modalData: {}
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
    editCustomerModal(item) {
      this.modalData = {
        action: "edit",
        data: item
      };
      this.showCustomerModal = true;
    },
    addCustomerModal() {
      this.modalData = {
        action: "add",
        data: {}
      };
      this.showCustomerModal = true;
    },
    prodcutModalHandler(data) {
      if (data == "close") {
        this.showCustomerModal = false;
      } else if (data.action == "add") {
        // call add dispatcher
        this.addCustomer(data.data);
      } else if (data.action == "edit") {
        // call edit dispatcher
        this.editCustomer(data.data);
      }
    },
    addCustomer(data) {
      this.isFormLoading = true;
      this.$store
        .dispatch(AT.ADD_CUSTOMER, data)
        .then(res => {
          this.showCustomerModal = false;
          this.$store.dispatch(AT.SNACKBAR, {
            text: "Customer added Successfully!"
          });
        })
        .catch(err => {
          const error =
            (err && err.response && err.response.data && err.response.data.message) || "Something went wrong";
          this.$store.dispatch(AT.SNACKBAR, {
            color: "error",
            text: error
          });
        })
        .finally(() => (this.isFormLoading = false));
    },
    editCustomer(data) {
      this.isFormLoading = true;
      this.$store
        .dispatch(AT.EDIT_CUSTOMER, data)
        .then(res => {
          this.showCustomerModal = false;
          this.$store.dispatch(AT.SNACKBAR, {
            text: "Customer updated Successfully!"
          });
        })
        .catch(err => {
          const error =
            (err && err.response && err.response.data && err.response.data.message) || "Something went wrong";
          this.$store.dispatch(AT.SNACKBAR, {
            color: "error",
            text: error
          });
        })
        .finally(() => (this.isFormLoading = false));
    }
  }
};
</script>
