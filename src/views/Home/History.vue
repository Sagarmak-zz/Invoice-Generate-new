<template>
  <div class="history">
    <v-card>
      <v-card-text class="d-flex justify-center">
        <v-btn-toggle v-model="type" tile color="primary">
          <v-btn value="bills">
            Bills
          </v-btn>

          <v-btn value="chalan">
            Chalan
          </v-btn>
        </v-btn-toggle>
      </v-card-text>
      <v-divider />
      <v-card-text class="pa-0">
        <v-data-table :headers="tableHeaders" :items="tableRows" class="elevation-1" hide-default-footer>
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
        { text: "Print", value: "print" }
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
        { text: "Print", value: "print" }
      ];
    },
    tableHeaders() {
      return this.type == "bills" ? this.billHeaders : this.chalanHeaders;
    },
    tableRows() {
      return this.type == "bills" ? this.bills : this.chalans;
    }
  },
  methods: {
    formatDate(date) {
      return Utils.formatDate(date);
    }
  }
};
</script>
