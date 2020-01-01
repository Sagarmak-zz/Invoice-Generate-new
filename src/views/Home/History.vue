<template>
  <div class="history">
    <v-card>
      <div class="d-flex justify-space-between align-center pa-2">
        <div class="d-flex align-center">
          <v-card-title>History</v-card-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-text-field v-model="search" hide-details label="Search" class="pa-2"></v-text-field>
        </div>
        <v-btn-toggle v-model="type" tile color="primary" @change="resetExpanded">
          <v-btn value="bills">
            Bills
          </v-btn>

          <v-btn value="chalan">
            Chalan
          </v-btn>
        </v-btn-toggle>
      </div>
      <v-divider />
      <v-card-text class="pa-0">
        <v-data-table
          :headers="tableHeaders"
          :items="tableRows"
          :expanded.sync="expanded"
          :search="search"
          class="elevation-1"
          show-expand
          hide-default-footer
        >
          <template v-slot:item.date="{ item }">
            <span v-if="item && item.created_at && item.created_at.date">
              {{ formatDate(item.created_at.date) }}
            </span>
          </template>
          <template v-slot:item.print="{ item }">
            <v-btn x-small fab icon>
              <v-icon color="primary">
                fas fa-print
              </v-icon>
            </v-btn>
          </template>
          <template v-slot:expanded-item="{ headers, item }">
            <td :colspan="headers.length" class="py-2">
              <v-data-table
                :headers="itemHeaders"
                :items="type == 'bills' ? item.billdetail : item.challan_detail"
                class="elevation-1"
                dense
                hide-default-footer
              >
                <template v-slot:item.amount="{ item }">
                  {{ getItemAmount(item) }}
                </template>
                <template v-slot:item.total="{ item }">
                  {{ getItemTotalAmount(item) }}
                </template>
              </v-data-table>
            </td>
          </template>
        </v-data-table>
      </v-card-text>
    </v-card>
  </div>
</template>
<script>
import Utils from "@/utils/Utils";

export default {
  name: "History",
  data() {
    return {
      expanded: [],
      search: "",
      type: "bills"
    };
  },
  computed: {
    bills() {
      return this.$store.getters.bills;
    },
    billHeaders() {
      return [
        { text: "Bill No", value: "invoice_no" },
        { text: "Date", value: "date" },
        { text: "Party Name", value: "firm_name" },
        { text: "Bill Amount", value: "taxable_amount" },
        { text: "SGST", value: "sgst_amount" },
        { text: "CGST", value: "cgst_amount" },
        { text: "IGST", value: "igst_amount" },
        { text: "Total", value: "total_payable_amount" },
        { text: "GST No", value: "gstNumber" },
        { text: "Print", value: "print" },
        { text: "", value: "data-table-expand" }
      ];
    },
    chalans() {
      return this.$store.getters.chalans;
    },
    chalanHeaders() {
      return [
        { text: "Chalan No", value: "challan_no" },
        { text: "Date", value: "date" },
        { text: "Party Name", value: "firm_name" },
        { text: "Total", value: "total_payable_amount" },
        { text: "Print", value: "print" },
        { text: "", value: "data-table-expand" }
      ];
    },
    tableHeaders() {
      return this.type == "bills" ? this.billHeaders : this.chalanHeaders;
    },
    tableRows() {
      return this.type == "bills" ? this.bills : this.chalans;
    },
    itemHeaders() {
      return [
        { text: "Product Name", value: "product_id" },
        { text: "Size", value: "size" },
        { text: "Quantity", value: "quantity" },
        { text: "Rate", value: "price" },
        { text: "Amount", value: "amount" },
        { text: "Dis %", value: "discount_percentage" },
        { text: "D Amount", value: "discount_amount" },
        { text: "Total", value: "total" }
      ];
    }
  },
  methods: {
    formatDate(date) {
      return Utils.formatDate(date);
    },
    getItemAmount(item) {
      return +item.price * +item.quantity;
    },
    getItemTotalAmount(item) {
      return +item.price * +item.quantity - +item.discount_amount;
    },
    resetExpanded() {
      this.expanded = [];
    }
  }
};
</script>
