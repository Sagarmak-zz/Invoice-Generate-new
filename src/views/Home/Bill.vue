<template>
  <div class="bill-page">
    <ValidationObserver ref="userDetails" v-slot="{ invalid, validated, passes, validate }">
      <v-card class="bill-page__card">
        <div class="bill-page__card__header pa-4 d-flex align-center justify-space-between">
          <span class="title">
            Generate Bill
          </span>
          <div class="d-flex align-center">
            <div class="bill-page__card__header pr-2">
              Fiscal year
            </div>
            <div class="bill-page__card__header__input">
              <TextField class="ma-0 pa-0" label="2019" />
            </div>
            <span class="title">-</span>
            <div class="bill-page__card__header__input">
              <TextField class="ma-0 pa-0" readonly label="20" />
            </div>
          </div>
        </div>

        <v-divider />

        <v-card-text>
          <v-row>
            <v-col>
              <SelectField item-text="name" item-value="id" :items="customers" label="Customers" />
            </v-col>
            <v-col>
              <TextField class="ma-0 pa-0" label="Invoice Number" />
            </v-col>
            <v-col>
              <TextField class="ma-0 pa-0" label="Invoice Date" />
            </v-col>
          </v-row>
        </v-card-text>

        <v-divider />

        <span class="pa-4">
          Main Details
        </span>

        <v-divider />

        <v-card-text style="position: relative;">
          <!-- text boxes with gst data -->
          <ValidationObserver ref="itemDetails" v-slot="{ invalid, validated, passes, validate }">
            <v-row>
              <v-col>
                <SelectField
                  v-model="currentProduct"
                  item-text="product_name"
                  rules="required"
                  item-value="id"
                  return-object
                  :items="products"
                  label="Products"
                  @input="selectProductHandler"
                />
              </v-col>
              <v-col>
                <TextField v-model="itemSize" rules="required" class="ma-0 pa-0" label="Size" />
              </v-col>
              <v-col>
                <TextField v-model="itemQuantity" rules="required" class="ma-0 pa-0" label="Quantity" />
              </v-col>
              <v-col>
                <TextField v-model="itemRate" rules="required" class="ma-0 pa-0" label="Rate" />
              </v-col>
              <v-col class="text-center">
                Amount:
                <div class="title">&#8377; {{ itemAmount }}</div>
              </v-col>
              <v-divider vertical />
              <v-col cols="1">
                <v-btn color="info" @click="passes(log)">
                  <v-icon left small>fas fa-plus</v-icon>
                  <span>Add</span>
                </v-btn>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <TextField v-model="discountRate" class="ma-0 pa-0" label="Discount Rate" />
              </v-col>
              <v-col class="text-center">
                Amount:
                <div class="title">&#8377; {{ itemDiscountAmount }}</div>
              </v-col>
              <v-col class="text-center">
                Total:
                <div class="title">&#8377; {{ itemUnTaxableAmount }}</div>
              </v-col>
              <v-divider vertical />
              <v-col class="text-center">
                CGST (0%) :
                <div class="title">
                  &#8377; 1000
                </div>
              </v-col>
              <v-col class="text-center">
                SGST (0%) :
                <div class="title">
                  &#8377; 1000
                </div>
              </v-col>
              <v-col class="text-center">
                IGST (0%) :
                <div class="title">
                  &#8377; 1000
                </div>
              </v-col>
              <v-col class="text-center">
                Total Tax Amount :
                <div class="title">
                  &#8377; 1000
                </div>
              </v-col>
              <v-divider vertical />
              <v-col class="text-center">
                Total :
                <div class="title">
                  &#8377; 100000
                </div>
              </v-col>
            </v-row>
          </ValidationObserver>
        </v-card-text>
        <v-divider />
        <v-card-text>
          <v-data-table :headers="tableheaders" :items="tableValues" class="elevation-1" hide-default-footer>
            <template v-slot:header="{ props }">
              <thead class="v-data-table-header">
                <tr>
                  <th class="v-data-table__divider"></th>
                  <th colspan="5" class="text-center v-data-table__divider">
                    Particulars
                  </th>
                  <th colspan="3" class="text-center v-data-table__divider">
                    Discount
                  </th>
                  <th></th>
                </tr>
              </thead>
            </template>
            <template v-slot:item.remove="{ item }">
              <v-btn icon>
                <v-icon color="error">
                  far fa-times-circle
                </v-icon>
              </v-btn>
            </template>
          </v-data-table>

          <div class="d-flex align-center justify-end">
            <v-simple-table style="width: 25vw" class="mt-4">
              <template v-slot:default>
                <tbody>
                  <tr>
                    <td>Total Taxable Amount</td>
                    <td class="font-weight-bold title">&#8377; 9000</td>
                  </tr>
                  <tr>
                    <td>CGST</td>
                    <td class="font-weight-bold title">&#8377; 100</td>
                  </tr>
                  <tr>
                    <td>SGST</td>
                    <td class="font-weight-bold title">&#8377; 100</td>
                  </tr>
                  <tr>
                    <td>IGST</td>
                    <td class="font-weight-bold title">&#8377; 100</td>
                  </tr>
                  <tr>
                    <td>Total Invoice Amount</td>
                    <td class="font-weight-bold title">&#8377; 10000</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </div>
        </v-card-text>

        <v-divider />
        <v-card-actions class="justify-end">
          <v-btn color="primary">Submit</v-btn>
        </v-card-actions>
      </v-card>
    </ValidationObserver>
  </div>
</template>
<script>
import { ValidationObserver } from "vee-validate";
import TextField from "@/components/TextField";
import SelectField from "@/components/SelectField";
import * as AT from "@/store/actionTypes";

export default {
  name: "Bill",
  components: {
    ValidationObserver,
    TextField,
    SelectField
  },
  data() {
    return {
      currentProduct: null,
      itemSize: "",
      itemQuantity: null,
      itemRate: null,
      discountRate: null
    };
  },
  computed: {
    itemAmount() {
      return +this.itemRate * +this.itemQuantity;
    },
    itemDiscountAmount() {
      return this.itemAmount * (this.discountRate / 100);
    },
    itemUnTaxableAmount() {
      return this.itemAmount - this.itemDiscountAmount;
    },
    // TODO
    // itemUnTaxableAmount
    // itemCgstAmount
    // itemSgstAmount
    // itemIgstAmount
    // itemTaxableAmount
    // itemTotalPayableAmount
    customers() {
      return this.$store.getters.customers || [];
    },
    products() {
      return this.$store.getters.products;
    },
    tableheaders() {
      return [
        { text: "SR", value: "serial_number", divider: true },
        { text: "Name", value: "product_name", width: "10rem" },
        { text: "Size", value: "size" },
        { text: "Qty", value: "quantity" },
        { text: "Rate", value: "rate" },
        { text: "Amount", value: "item_amount" },
        { text: "Rate", value: "discount_rate" },
        { text: "Amount", value: "discount_amount" },
        { text: "Total Amount", value: "total_amount" },
        { text: "Action", value: "remove" }
      ];
    },
    tableValues() {
      return [
        {
          serial_number: 1,
          product_name: "Aaaaaaaaaaaa",
          size: "L",
          quantity: "50",
          rate: "50",
          item_amount: "2500",
          discount_rate: "0",
          discount_amount: "0",
          total_amount: "2500"
        }
      ];
    }
  },
  methods: {
    log() {
      console.log("Passed");
    },
    selectProductHandler(e) {
      this.itemRate = e.product_price;
    }
  }
};
</script>
<style lang="scss">
.bill-page {
  &__card {
    &__header {
      &__input {
        width: 3rem;
        .v-input {
          padding: 0;
          margin: 0;
        }
      }
    }
  }
}
</style>
