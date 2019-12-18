<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="800px">
      <v-card>
        <v-card-title>
          <span class="headline">Add Customer</span>
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="6">
              <v-text-field v-model="firmName" label="Firm Name" hide-details required></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field v-model="person_name" label="Contact Person name" hide-details></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field v-model="gst_number" label="GST Number" hide-details required></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field v-model="email" label="Email" hide-details></v-text-field>
            </v-col>
          </v-row>

          <span class="headline">
            Billing
          </span>
          <v-divider />

          <v-row>
            <v-col cols="6">
              <v-textarea v-model="billing_address" name="billing-address" label="Billing Address"></v-textarea>
            </v-col>
            <v-col cols="6" class="d-flex flex-column">
              <v-text-field v-model="billing_mobile_number" label="Contact No(Mobile)" hide-details></v-text-field>
              <v-text-field v-model="billing_landline_number" label="Contact No(Landline)" hide-details></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="4">
              <v-text-field v-model="billing_city" label="City" hide-details required></v-text-field>
            </v-col>
            <v-col cols="4">
              <v-text-field v-model="billing_state_code" label="State" hide-details></v-text-field>
            </v-col>
            <v-col cols="4">
              <v-text-field v-model="billing_pincode" label="Pincode" hide-details required></v-text-field>
            </v-col>
          </v-row>

          <span class="headline">
            Shipping
          </span>
          <v-divider />
          <v-row>
            <v-col cols="6">
              <v-textarea v-model="email" name="shipping_address-address" label="Billing Address"></v-textarea>
            </v-col>
            <v-col cols="6" class="d-flex flex-column">
              <v-text-field v-model="shipping_mobile_number" label="Contact No(Mobile)" hide-details></v-text-field>
              <v-text-field v-model="shipping_landline_number" label="Contact No(Landline)" hide-details></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="4">
              <v-text-field v-model="shipping_city" label="City" hide-details required></v-text-field>
            </v-col>
            <v-col cols="4">
              <v-text-field v-model="shipping_state_code" label="State" hide-details></v-text-field>
            </v-col>
            <v-col cols="4">
              <v-text-field v-model="shipping_pincode" label="Pincode" hide-details required></v-text-field>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="$emit('add-product-modal', close)">Close</v-btn>
          <v-btn color="blue darken-1" text @click="closeModal">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script lang="js">
export default {
  name: "AddCustomerModal",
    data() {
        return {
            dialog: true,
            name: "",
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
    methods: {
        addProductModal() {
            const data = 1;
            this.$emit('add-product-modal', data);
        }
    }
}
</script>
