<template>
  <div class="bill-modal">
    <v-dialog v-model="dialog" width="23cm" :loading="loading" light persistent>
      <v-card>
        <v-card-title>
          <!-- Dialog title if a title prop found -->
          <div class="headline">{{ title }}</div>
          <v-spacer></v-spacer>
          <v-btn class="primary" @click="printBill">Print</v-btn>
          <v-spacer></v-spacer>
          <v-btn @click="$emit('bill-modal', false)">Close</v-btn>
          <!-- Dialog title if a title slot provided -->
          <slot name="title" />
        </v-card-title>
        <v-card-text>
          <PrintBill ref="invoice" :data="data" />
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import PrintBill from "./PrintBill";
import html2pdf from "html2pdf.js";

export default {
  name: "BillModal",
  components: {
    PrintBill
  },
  props: {
    data: {
      type: Object,
      default: () => {}
    },
    title: {
      type: String,
      default: ""
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      dialog: true
    };
  },
  methods: {
    printBill() {
      const element = this.$refs.invoice.$refs.printable_invoice;
      console.log("printBill -> element", element);
      const options = {
        html2canvas: {
          scrollX: 0,
          scrollY: 0
        }
      };
      html2pdf()
        .from(element)
        .set(options)
        .save("filename");
    }
  }
};
</script>
