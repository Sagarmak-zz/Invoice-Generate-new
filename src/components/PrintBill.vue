<template lang="html">
  <div ref="printable_invoice" class="template box a4size">
    <div class="header">
      <div class="left text-center">
        <h1>{{ firmName }}</h1>
        <div class="text-left">
          <table>
            <tbody>
              <tr>
                <th>GST NO:</th>
                <td>{{ userDetails.gst_number }}</td>
              </tr>
              <tr>
                <th rowspan="2">Address:</th>
                <td rowspan="2">
                  {{ userDetails.address }}, {{ userDetails.cityname }}
                  <span>-{{ userDetails.pincode }}</span>
                </td>
              </tr>
              <tr></tr>
              <tr>
                <th>State & Code:</th>
                <td>State - {{ userDetails.state_code }}</td>
              </tr>
              <tr v-if="userDetails && userDetails.landline_number">
                <th>Phone:</th>
                <td>{{ userDetails.landline_number }}</td>
              </tr>
              <tr>
                <th>Email:</th>
                <td>{{ userDetails.email }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="right text-center">
        <div class="invoice-details-copy">
          <b>Original Copy</b>
        </div>
        <div class="invoice-head">INVOICE</div>
        <div class="invoice-no-date">
          <span class="invoice-details">Invoice No: {{ "Invoice Number" }}</span>
          <span class="invoice-details">Date: {{ "Created Date" }}</span>
        </div>
        <div class="text-left">
          <table>
            <tbody>
              <tr>
                <th>Bank Account Number:</th>
                <td>{{ userDetails.account_no }}</td>
              </tr>
              <tr>
                <th>Bank Branch IFSC:</th>
                <td>{{ userDetails.ifsc_code }}</td>
              </tr>
              <tr>
                <th>Bank Name:</th>
                <td>{{ userDetails.bank_name }}</td>
              </tr>
              <tr>
                <th>Bank Branch Name:</th>
                <td>{{ userDetails.branch_name }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="buyer text-left">
      <table>
        <tbody>
          <tr>
            <th>M/S:</th>
            <td>{{ data.firm_name }}</td>
          </tr>
          <tr>
            <th>GST NO:</th>
            <td>{{ data.gstNumber }}</td>
          </tr>
          <tr>
            <th>Address:</th>
            <td>Address, Billing City, State-Pincode</td>
          </tr>
        </tbody>
      </table>
      <table>
        <tbody>
          <tr>
            <th>Phone:</th>
            <td>Landline Number</td>
          </tr>
          <tr>
            <th>Email:</th>
            <td>Customer Email</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="invoice-body">
      <v-data-table :headers="tableHeaders" :items="invoiceItems" class="elevation-1" hide-default-footer>
        <template v-slot:header="{ props }">
          <thead class="v-data-table-header">
            <tr>
              <th class="v-data-table__divider"></th>
              <th colspan="5" class="text-center v-data-table__divider">
                Particulars
              </th>
              <th colspan="3" class="text-center v-data-table__divider">
                Discount
              </th>
            </tr>
          </thead>
        </template>
        <template v-slot:item.totalAmount="{ item }">
          <span>
            {{ calculateItemPrice(item) }}
          </span>
        </template>
        <template v-slot:item.itemAfterDiscountAmount="{ item }">
          <span>
            {{ calculateDiscountedPrice(item) }}
          </span>
        </template>
        <template v-slot:item.serialNumber="{ item }">
          <span>
            {{ invoiceItems.map(x => x.uniqId).indexOf(item.uniqId) + 1 }}
          </span>
        </template>
      </v-data-table>
    </div>

    <div class="invoice-body-lower">
      <div>
        <v-simple-table dense>
          <template v-slot:default>
            <tbody>
              <tr>
                <td>Total Taxable Amount</td>
                <td>&#8377; {{ data.taxable_amount }}</td>
              </tr>
              <tr>
                <td>CGST</td>
                <td>&#8377; {{ data.cgst_amount }}</td>
              </tr>
              <tr>
                <td>SGST</td>
                <td>&#8377; {{ data.sgst_amount }}</td>
              </tr>
              <tr>
                <td>IGST</td>
                <td>&#8377; {{ data.igst_amount }}</td>
              </tr>
              <tr>
                <td>Total Invoice Amount</td>
                <td>&#8377; {{ data.total_payable_amount }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </div>
    </div>

    <div class="invoice-footer">
      <div class="left">
        <span><b>N.B.</b></span>
        <div>
          <b>(1)</b> We declare that this invoice shows the actual price of the goods described and that all particulars
          are true and correct.
          <b>(2)</b>
          Goods are sent on your account & risk and according to the rules of the Gujarat Garment Manufacturer
          Association(GGMA).
        </div>
        <div class="spacing">Subject to Ahmedabad Jurisdiction</div>
      </div>
      <div class="right">
        <div>For, {{ firmName }}</div>
        <div>Authorised Signature</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Printbill",
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    tableHeaders() {
      return [
        { text: "SR", value: "serialNumber", divider: true },
        { text: "Name", value: "productName", width: "10rem" },
        { text: "Size", value: "size" },
        { text: "Qty", value: "quantity" },
        { text: "Rate", value: "price" },
        { text: "Amount", value: "totalAmount", divider: true },
        { text: "Rate", value: "discount_percentage" },
        { text: "Amount", value: "discount_amount" },
        { text: "Total", value: "itemAfterDiscountAmount" }
      ];
    },
    invoiceItems() {
      return this.data && this.data.billdetail;
    },
    userDetails() {
      return this.$store.getters.userDetails.user_detail || {};
    },
    firmName() {
      return this.userDetails && this.userDetails.name;
    }
  },
  methods: {
    calculateItemPrice(item) {
      const itemQty = item.quantity;
      const itemPrice = item.price;
      return itemQty * itemPrice;
    },
    calculateDiscountedPrice(item) {
      const itemTotal = this.calculateItemPrice(item);
      const discount = item.discount_amount;
      return itemTotal - discount;
    }
  }
};
</script>

<style lang="scss">
.text-center {
  text-align: center;
}
.text-left {
  text-align: left;
}
.template {
  width: 21cm;
  font: -webkit-small-control;
  .header {
    max-height: 6cm;
    padding: 1rem 1.5rem;
    display: flex;
    justify-content: space-between;
    border-bottom: solid 2px #ddd;

    .left {
      max-width: 55%;
      margin-top: 0.5rem;

      h1 {
        margin: 0;
        margin-bottom: 1.5rem;
        background: whitesmoke;
        font-size: 1.5rem;
      }
    }

    .right {
      .invoice-head {
        color: black;
        font-weight: 500;
        font-size: 3rem;
      }

      .invoice-details {
        font-size: 17px;
        font-weight: 500;
      }

      .invoice-details-copy {
        font-size: 0.8rem;
      }

      .invoice-details.last {
        padding-bottom: 0.2rem;
      }

      .invoice-no-date {
        display: flex;
        // justify-content: space-evenly;
        align-items: center;
        margin-bottom: 0.5rem;

        .invoice-details {
          padding-right: 0.5rem;
        }
      }
    }
  }

  .buyer {
    max-height: 3cm;
    padding: 1rem 1.5rem;
    border-bottom: solid 2px #ddd;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .invoice-body {
    height: 13cm;
  }

  .invoice-body-lower {
    height: 5.3cm;
    div {
      float: right;
    }
  }

  .invoice-footer {
    border-top: solid 1px #ddd;
    font-size: 11px;
    max-height: 3cm;
    padding: 1rem;
    display: flex;
    justify-content: space-between;

    .left {
      max-width: 25rem;

      .spacing {
        padding-top: 1rem;
      }
    }

    .right {
      height: 5rem;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      align-items: center;
    }
  }
}
</style>
