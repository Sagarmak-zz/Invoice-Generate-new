<template>
  <div class="products">
    <v-row>
      <v-col>
        <v-card>
          <v-data-table :headers="headers" :items="desserts" class="elevation-1" :search="search" hide-default-footer>
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
                    <v-btn color="primary" dark class="mb-2" v-on="on">New Product</v-btn>
                  </template>
                  <v-card>
                    <v-card-title>
                      <span class="headline">Add a Product</span>
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
                      <v-btn color="blue darken-1" text @click="dialog = false">Cancel</v-btn>
                      <v-btn color="blue darken-1" text>Save</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-toolbar>
            </template>

            <template v-slot:item.action="{ item }">
              <v-icon small class="mr-2" @click="editProduct">
                fas fa-edit
              </v-icon>
              <v-icon small @click="deleteProduct">
                fas fa-trash
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
  name: "Products",
  data() {
    return {
      dialog: false,
      headers: [
        { text: "Name", value: "name" },
        { text: "HSN Code", value: "calories" },
        { text: "Rate", value: "fat" },
        { text: "Actions", value: "action", sortable: false }
      ],
      desserts: [
        {
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0,
          carbs: 24
        }
      ],
      productName: "",
      productHSNCode: "",
      productRate: null,
      search: ""
    };
  },
  methods: {
    editProduct() {
      //
    },
    deleteProduct() {
      //
    }
  }
};
</script>
