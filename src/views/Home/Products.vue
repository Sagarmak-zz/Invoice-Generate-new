<template>
  <div class="products">
    <v-row>
      <v-col>
        <v-card>
          <div class="d-flex justify-space-between align-center pa-2">
            <div class="d-flex align-center">
              <v-card-title>Products</v-card-title>
              <v-divider class="mx-4" inset vertical></v-divider>
              <v-text-field v-model="search" hide-details label="Search" class="pa-2"></v-text-field>
            </div>
            <v-btn color="primary" dark @click="addProductModal">New Product</v-btn>
          </div>
          <v-data-table
            :headers="productTableHeaders"
            :items="products"
            class="elevation-1"
            :search="search"
            :loading="gettingProducts"
            hide-default-footer
          >
            <template v-slot:item.action="{ item }">
              <v-icon small class="mr-2" color="primary" @click="editProductModal(item)">
                fas fa-edit
              </v-icon>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
    <ProductModal
      v-if="showProductModal"
      :data="modalData"
      :loading="isFormLoading"
      @product-modal="productModalHandler"
    />
  </div>
</template>
<script>
import ProductModal from "@/components/ProductModal.vue";
import * as AT from "@/store/actionTypes";

export default {
  name: "Products",
  components: {
    ProductModal
  },
  data() {
    return {
      showProductModal: false,
      search: "",
      isFormLoading: false,
      modalData: {}
    };
  },
  computed: {
    gettingProducts() {
      return this.$store.getters.gettingProducts;
    },
    products() {
      return this.$store.getters.products;
    },
    productTableHeaders() {
      return [
        { text: "Name", value: "product_name" },
        { text: "HSN Code", value: "hsn_code" },
        { text: "Rate", value: "product_price" },
        { text: "Actions", value: "action", sortable: false }
      ];
    }
  },
  methods: {
    addProductModal() {
      this.modalData = {
        action: "add",
        data: {}
      };
      this.showProductModal = true;
    },
    editProductModal(item) {
      this.modalData = {
        action: "edit",
        data: item
      };
      this.showProductModal = true;
    },
    productModalHandler(data) {
      if (data == "close") {
        this.showProductModal = false;
      } else if (data.action == "add") {
        // call add dispatcher
        this.addProduct(data.data);
      } else if (data.action == "edit") {
        // call edit dispatcher
        this.editProduct(data.data);
      }
    },
    addProduct(postData) {
      this.isFormLoading = true;

      this.$store
        .dispatch(AT.ADD_PRODUCT, postData)
        .then(res => {
          this.$store.dispatch(AT.SNACKBAR, {
            text: "Product Added Successfully"
          });
          this.showProductModal = false;
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
    editProduct(postData) {
      this.isFormLoading = true;

      this.$store
        .dispatch(AT.EDIT_PRODUCT, postData)
        .then(res => {
          this.$store.dispatch(AT.SNACKBAR, {
            text: "Product Updated Successfully"
          });
          this.showProductModal = false;
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
