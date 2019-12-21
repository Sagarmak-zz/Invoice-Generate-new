<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="800px">
      <ValidationObserver ref="userDetails" v-slot="{ invalid, validated, passes, validate }">
        <v-card>
          <v-card-title>
            <span class="headline">Add Customer</span>
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="6">
                <TextField v-model="firmName" rules="required" label="Firm Name" />
              </v-col>
              <v-col cols="6">
                <TextField v-model="personName" rules="required" label="Contact Person name" />
              </v-col>
              <v-col cols="6">
                <TextField v-model="gstNumber" rules="required" label="GST Number" />
              </v-col>
              <v-col cols="6">
                <TextField v-model="email" rules="required|email" label="Email" />
              </v-col>
            </v-row>

            <span class="headline">
              Billing
            </span>
            <v-divider />

            <v-row>
              <v-col cols="6">
                <TextArea v-model="billingAddress" rules="required" label="Billing Address" />
              </v-col>
              <v-col cols="6" class="d-flex flex-column">
                <TextField v-model="billingMobileNumber" label="Contact No(Mobile)" />
                <TextField v-model="billingLandlineNumber" label="Contact No(Landline)" />
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="4">
                <TextField v-model="billingCity" rules="required" label="Billing City" />
              </v-col>
              <v-col cols="4">
                <SelectField
                  v-model="shippingStateCode"
                  item-text="state_name"
                  item-value="state_code"
                  rules="required"
                  :items="states"
                  label="Billing State"
                />
              </v-col>
              <v-col cols="4">
                <TextField v-model="billingCity" label="Pincode" />
              </v-col>
            </v-row>

            <span class="headline">
              Shipping
            </span>
            <v-divider />
            <v-row>
              <v-col cols="6">
                <TextArea v-model="shippingAddress" rules="required" label="Shipping Address" />
              </v-col>
              <v-col cols="6" class="d-flex flex-column">
                <TextField v-model="shippingMobileNumber" label="Contact No(Mobile)" />
                <TextField v-model="shippingLandlineNumber" label="Contact No(Landline)" />
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="4">
                <TextField v-model="shippingCity" rules="required" label="Shipping City" />
              </v-col>
              <v-col cols="4">
                <SelectField
                  v-model="shippingStateCode"
                  item-text="state_name"
                  item-value="state_code"
                  rules="required"
                  :items="states"
                  label="Shipping State"
                />
              </v-col>
              <v-col cols="4">
                <TextField v-model="shippingPincode" label="Pincode" />
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="$emit('product-modal', 'close')">Close</v-btn>
            <v-btn color="blue darken-1" text @click="passes(action)">Save</v-btn>
          </v-card-actions>
        </v-card>
      </ValidationObserver>
    </v-dialog>
  </v-row>
</template>
<script lang="js">
import { ValidationObserver } from "vee-validate";
import SelectField from "@/components/SelectField";
import TextField from "@/components/TextField";
import TextArea from "@/components/TextArea";

export default {
  name: "AddCustomerModal",
  components: {
    ValidationObserver,
    TextField,
    SelectField,
    TextArea
  },
  props: {
    data: {
      default: () => {},
      type: Object
    }
  },
  data() {
    return {
      dialog: true,
      firmName: "",
      personName: "",
      email: "",
      gstNumber: "",
      billingAddress: "",
      billingCity: "",
      billingStateCode: "",
      billingPincode: "",
      billingMobileNumber: "",
      billingLandlineNumber: "",
      shippingAddress: "",
      shippingCity: "",
      shippingStateCode: "",
      shippingPincode: "",
      shippingMobileNumber: "",
      shippingLandlineNumber: ""
    };
  },
  computed: {
    states() {
      return this.$store.getters.states || [];
    }
  },
  methods: {
    addProductModal() {
      const data = {
        action: 'add',
        data: {
          name: this.firmName,
          person_name: this.personName,
          email: this.email,
          gst_number: this.gstNumber,
          billing_address: this.billingAddress,
          billing_city: this.billingCity,
          billing_state_code: this.billingStateCode,
          billing_pincode: this.billingPincode,
          billing_mobile_number: this.billingMobileNumber,
          billing_landline_number: this.billingLandlineNumber,
          shipping_address: this.shippingAddress,
          shipping_city: this.shippingCity,
          shipping_state_code: this.shippingStateCode,
          shipping_pincode: this.shippingPincode,
          shipping_mobile_number: this.shippingMobileNumber,
          shipping_landline_number: this.shippingLandlineNumber
        }
      }
      this.$emit('product-modal', data);
    },
    action() {
      //
    }
  }
}
</script>
