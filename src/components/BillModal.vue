<template>
  <div class="bill-modal">
    <v-dialog v-model="dialog" width="214mm" persistent>
      <v-card>
        <v-card-title>
          <!-- Dialog title if a title prop found -->
          <div class="headline">Title</div>
          <!-- Dialog title if a title slot provided -->
          <slot name="title" />
        </v-card-title>
        <v-card-text>
          <PrintBill />
          <!-- 297mm x 210mm -->
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import PrintBill from "./PrintBill";
export default {
  name: "BillModal",
  components: {
    PrintBill
  },
  props: {
    title: {
      type: String,
      default: ""
    },
    message: {
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
  }
};
</script>
