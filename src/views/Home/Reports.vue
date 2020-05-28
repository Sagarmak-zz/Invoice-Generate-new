<template>
  <div class="reports">
    Reports <v-btn @click="generatePDF">Click Here</v-btn>
    <BillModal v-if="showBillModal" />
    <div class="invoice ma-5">
      <PrintBill ref="invoice" />
    </div>
  </div>
</template>
<script>
import html2pdf from "html2pdf.js";
import BillModal from "../../components/BillModal";
import PrintBill from "../../components/PrintBill";
export default {
  name: "Reports",
  components: {
    BillModal,
    PrintBill
  },
  data() {
    return {
      showBillModal: false
    };
  },
  methods: {
    generatePDF() {
      // this.showBillModal = true;
      const element = this.$refs.invoice.$refs.printable_invoice;
      // Choose the element that our invoice is rendered in.
      console.log("generatePDF -> ref", element);
      // Choose the element and save the PDF for our user.
      html2pdf()
        .from(element)
        .save("saveFile")
        .set({ html2canvas: { scale: 4 } })
        .save();
    }
  }
};
</script>
