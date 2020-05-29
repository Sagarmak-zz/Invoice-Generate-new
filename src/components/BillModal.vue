<template>
  <div class="bill-modal">
    <v-dialog v-model="dialog" width="23cm" :loading="loading">
      <v-card>
        <v-card-title>
          <!-- Dialog title if a title prop found -->
          <div class="headline">{{ title }}</div>
          <v-spacer></v-spacer>
          <v-btn class="primary">Print</v-btn>
          <!-- Dialog title if a title slot provided -->
          <slot name="title" />
        </v-card-title>
        <v-card-text>
          <PrintBill :data="data" />
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
  }
};
</script>
