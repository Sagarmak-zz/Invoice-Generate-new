<template>
  <div name="product-modal">
    <v-dialog v-model="dialog" max-width="500px">
      <ValidationObserver ref="productForm" v-slot="{ invalid, validated, passes, validate }">
        <v-card>
          <v-card-title>
            <span class="headline">{{ addModal ? "Add" : "Edit" }} Product</span>
          </v-card-title>

          <v-card-text>
            <v-row>
              <v-col>
                <TextField v-model="productName" rules="required" :loading="loading" label="Product Name" />
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <TextField v-model="productHSNCode" rules="required" :loading="loading" label="HSN Code" />
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <TextField
                  v-model="productRate"
                  :rules="{ regex: /^\d*\.?\d*$/, required: true }"
                  :loading="loading"
                  label="Product Rate"
                />
              </v-col>
            </v-row>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn :loading="loading" color="primary" text @click="$emit('product-modal', 'close')">Close</v-btn>
            <v-btn :loading="loading" color="primary" @click="passes(productModal)">
              {{ addModal ? "Save" : "Update" }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </ValidationObserver>
    </v-dialog>
  </div>
</template>
<script lang="js">
import { ValidationObserver } from "vee-validate";
import TextField from "@/components/TextField";

export default {
  name: "ProductModal",
  components: {
      ValidationObserver,
      TextField
  },
  props: {
    data: {
      default: () => {},
      type: Object
    },
    loading: {
      default: false,
      type: Boolean
    }
  },
  data() {
      return {
          dialog: true,
          id: null,
          productName: "",
          productHSNCode: "",
          productRate: null
      };
  },
  computed: {
    addModal() {
      return this.data && this.data.action == "add";
    },
    editModal() {
      return this.data && this.data.action == "edit";
    },
    products() {
      return this.$store.getters.products || [];
    }
  },
  created() {
      const data = this.data.data;
      this.id = data.id,
      this.productName = data.product_name;
      this.productHSNCode = data.hsn_code;
      this.productRate = data.product_price;
  },
  methods: {
    productModal() {
      this.$emit('product-modal', this.collectData());
    },
    collectData() {
      return {
        action: this.data && this.data.action || "add",
        data: {
          id: this.id,
          product_name: this.productName,
          hsn_code: this.productHSNCode,
          product_price: this.productRate,
        }
      }
    },
  }
}
</script>
