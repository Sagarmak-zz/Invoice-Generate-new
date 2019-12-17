<template>
  <div class="products">
    <v-row>
      <v-col>
        <v-card>
          <v-data-table
            :headers="headers"
            :items="products"
            class="elevation-1"
            :search="search"
            :loading="gettingProducts"
            hide-default-footer
          >
            <template v-slot:top>
              <v-toolbar flat color="white">
                <v-toolbar-title>Products</v-toolbar-title>
                <v-divider class="mx-4" inset vertical></v-divider>
                <v-row>
                  <v-col cols="6">
                    <v-text-field v-model="search" hide-details label="Search" class="pa-2"></v-text-field>
                  </v-col>
                </v-row>
                <v-spacer></v-spacer>
                <v-dialog v-model="dialog" max-width="500px">
                  <template v-slot:activator="{ on }">
                    <v-btn color="primary" dark class="mb-2" v-on="on" @click="addProductAction">New Product</v-btn>
                  </template>
                  <v-card>
                    <v-card-title>
                      <span class="headline">{{ dialogTitle }}</span>
                    </v-card-title>

                    <v-card-text>
                      <v-row>
                        <v-col>
                          <v-text-field v-model="productName" label="Product Name"></v-text-field>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col>
                          <v-text-field v-model="productHSNCode" label="HSN Code"></v-text-field>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col>
                          <v-text-field v-model="productRate" label="Product Rate"></v-text-field>
                        </v-col>
                      </v-row>
                    </v-card-text>

                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="blue darken-1" text @click="resetDialogForm">Cancel</v-btn>
                      <v-btn color="blue darken-1" text @click="dialogAction == 'Add' ? addProduct() : editProduct()"
                        >Save</v-btn
                      >
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-toolbar>
            </template>

            <template v-slot:item.action="{ item }">
              <v-icon small class="mr-2" @click="openEditDialog(item)">
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
import * as AT from "@/store/actionTypes";

export default {
  name: "Products",
  data() {
    return {
      dialog: false,
      dialogAction: "",
      dialogTitle: "",
      headers: [
        { text: "Name", value: "product_name" },
        { text: "HSN Code", value: "hsn_code" },
        { text: "Rate", value: "product_price" },
        { text: "Actions", value: "action", sortable: false }
      ],
      productName: "",
      productHSNCode: "",
      productRate: null,
      productId: null,
      search: ""
    };
  },
  computed: {
    gettingProducts() {
      return this.$store.getters.gettingProducts;
    },
    products() {
      return this.$store.getters.products;
    }
  },
  methods: {
    addProductAction() {
      this.dialogTitle = "Add Product";
      this.dialogAction = "Add";
    },
    addProduct() {
      const postData = {
        product_name: this.productName,
        hsn_code: this.productHSNCode,
        product_price: this.productRate
      };

      this.$store
        .dispatch(AT.ADD_PRODUCT, postData)
        .then(res => {
          this.$store.dispatch(AT.GET_PRODUCTS);
          this.$store.dispatch(AT.SNACKBAR, {
            text: "Product Added Successfully"
          });
        })
        .catch(err => console.log(err))
        .finally(() => {
          this.resetDialogForm();
        });
    },
    openEditDialog(item) {
      this.dialogTitle = "Edit Product";
      this.dialogAction = "Edit";
      (this.productName = item.product_name),
        (this.productHSNCode = item.hsn_code),
        (this.productRate = item.product_price),
        (this.productId = item.id);
      this.dialog = true;
    },
    editProduct() {
      const postData = {
        product_name: this.productName,
        hsn_code: this.productHSNCode,
        product_price: this.productRate,
        productId: this.productId
      };

      this.$store
        .dispatch(AT.EDIT_PRODUCT, postData)
        .then(res => {
          this.$store.dispatch(AT.GET_PRODUCTS);
          this.$store.dispatch(AT.SNACKBAR, {
            text: "Product Updated Successfully"
          });
        })
        .catch(err => console.log(err))
        .finally(() => {
          this.resetDialogForm();
        });
    },
    resetDialogForm() {
      this.resetForm();
      this.dialog = false;
    },
    resetForm() {
      (this.productName = ""), (this.productHSNCode = ""), (this.productRate = null);
    }
  }
};
</script>
