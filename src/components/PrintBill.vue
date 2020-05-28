<template lang="html">
  <div ref="printable_invoice" class="template box a4size">
    <div class="template-body-main">
      <div class="seller text-center">
        <h1>Admin Firm Name</h1>
        <div class="text-left">
          <table>
            <tbody>
              <tr>
                <th>GST NO:</th>
                <td>GST</td>
              </tr>
              <tr>
                <th rowspan="2">Address:</th>
                <td rowspan="2">
                  Address, Cityname
                  <span>-Pincode</span>
                </td>
              </tr>
              <tr></tr>
              <tr>
                <th>State & Code:</th>
                <td>State - StateCode</td>
              </tr>
              <tr>
                <th>Phone:</th>
                <td>Landline Number</td>
              </tr>
              <tr>
                <th>Email:</th>
                <td>Admin Email</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="invoice text-center">
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
                <td>Admin Bank Acc No</td>
              </tr>
              <tr>
                <th>Bank Branch IFSC:</th>
                <td>IFSC Code</td>
              </tr>
              <tr>
                <th>Bank Name:</th>
                <td>Bank Name</td>
              </tr>
              <tr>
                <th>Bank Branch Name:</th>
                <td>Branch Name</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <!-- <div class="buyer text-left">
      <div class="tile is-ancestor">
        <div class="tile is-parent">
          <article class="tile is-child">
            <div class="table-responsive">
              <table class="table is-bordered is-striped is-narrow">
                <tbody>
                  <tr>
                    <th>M/S:</th>
                    <td>Customer Firm Name</td>
                  </tr>
                  <tr>
                    <th>GST NO:</th>
                    <td>Customer GST</td>
                  </tr>
                  <tr>
                    <th>Address:</th>
                    <td>Address, Billing City, State-Pincode</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>
        </div>
      </div>
      <div class="tile is-ancestor">
        <div class="tile is-parent">
          <article class="tile is-child">
            <div class="table-responsive right-side">
              <table class="table is-bordered is-striped is-narrow">
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
          </article>
        </div>
      </div>
    </div> -->
    <!-- <div class="template-body-items">
      <div class="tile is-ancestor">
        <div class="tile is-parent">
          <article class="tile is-child">
            <div class="table-responsive">
              <table class="table is-bordered is-striped is-narrow">
                <thead>
                  <tr>
                    <th>SR</th>
                    <th colspan="5">Particulars</th>
                    <th colspan="2">Discount</th>
                    <th>Taxable Amount</th>
                  </tr>
                </thead>
                <thead>
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Size</th>
                    <th>Qty</th>
                    <th>Rate</th>
                    <th>Amount</th>
                    <th>%</th>
                    <th>Amount</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>ID</td>
                    <td>Product Name - HSN Code</td>
                    <td>Size</td>
                    <td>Qty</td>
                    <td>Price</td>
                    <td>Rate</td>
                    <td>Disc %</td>
                    <td>Disc Amt</td>
                    <td>Total Amount</td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>
        </div>
      </div>
      <div class="bottom-details">
        <div class="part-one has-text-centered">
          <div class="blank"></div>
          <div class="amount-in-words">
            <p>Total Invoice Amount In Words:</p>
            <p>Amount in Words</p>
          </div>
        </div>
        <div class="tile is-ancestor part-two">
          <div class="tile is-parent">
            <article class="tile is-child">
              <div class="table-responsive">
                <table class="table is-bordered is-striped is-narrow">
                  <tbody>
                    <tr>
                      <td>Total Taxable Amount:</td>
                      <th>&#8377; 12345</th>
                    </tr>
                    <tr>
                      <td>CGST: 5%</td>
                      <th>&#8377; 12345</th>
                    </tr>
                    <tr>
                      <td>SGST: 5%</td>
                      <th>&#8377; 12345</th>
                    </tr>
                    <tr>
                      <td>IGST: 5%</td>
                      <th>&#8377; 12345</th>
                    </tr>
                    <tr>
                      <td>Total Invoice Value:</td>
                      <th>&#8377; 1234561234</th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div> -->
    <!-- <div class="template-bottom">
      <div class="part-one">
        <span><b>N.B.</b></span>
        <div>
          <b>(1)</b> We declare that this invoice shows the actual price of the goods described and that all
          particulars are true and correct.
          <b>(2)</b>
          Goods are sent on your account & risk and according to the rules of the Gujarat Garment Manufacturer
          Association(GGMA).
        </div>
        <div class="spacing">Subject to Ahmedabad Jurisdiction</div>
      </div>
      <div class="part-two">
        <div>For, Admin Firm Name</div>
        <div class="take-me-to-the-bottom">Authorised Signature</div>
      </div>
    </div> -->
  </div>
</template>

<script>
// export default {
//   name: "Printbill",
//   created() {
//     this.invoice_no = this.$route.params.invoice_no;
//     this.fiscal_year = this.$route.params.fiscal_year;
//     this.getBillByInvoiceNo();
//     this.printableInvoiceNumber = numeral( this.invoice_no ).format( '0000' );
//     // console.log(num2Word('1,234'));
//   },
//   data() {
//     return {
//       invoice_no: '',
//       fiscal_year: '',
//       bill_details: {},
//       amountInWords: null,
//       loadingLight: false,
//       printableInvoiceNumber: ""
//     };
//   },
//   methods: {
//     getBillByInvoiceNo() {
//       this.loadingLight = true;
//       api.getBillByInvoiceNo(this.invoice_no, this.fiscal_year)
//         .then(response => {
//           this.loadingLight = false;
//           if (response.data.invoice_no == this.invoice_no) {
//             this.bill_details = response.data;
//             this.amountInWords = this.toUpper(
//               num2Word(this.bill_details.total_payable_amount)
//             );
//           } else {
//             this.loadingLight = false;
//             this.$router.push({
//               name: "Page404"
//             });
//           }
//         })
//         .catch(error => {
//           this.loadingLight = false;
//           console.log(error);
//         });
//     },
//     toUpper(str) {
//       return str
//         .toLowerCase()
//         .split(" ")
//         .map(function(word) {
//           return word[0].toUpperCase() + word.substr(1);
//         })
//         .join(" ");
//     }
//   }
// };
</script>

<style lang="scss">
.text-center {
  text-align: center;
}
.text-left {
  text-align: left;
}
.template {
  font: -webkit-small-control;

  padding: 0;
  width: 21cm;
  height: 29.7cm;
  border: solid 1px red;

  .template-body-main {
    max-height: 6cm;
    padding: 1rem 1.5rem;
    display: flex;
    justify-content: space-between;
    border-bottom: solid 2px #ddd;
  }

  .seller {
    // max-width: 55%;

    h1 {
      margin: 0;
      margin-bottom: 0.5rem;
      background: whitesmoke;
      font-size: 1.5rem;
    }
  }

  .invoice {
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

  .buyer {
    max-height: 3cm;
    padding: 1rem 1.5rem;
    border-bottom: solid 2px #ddd;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .tile.is-ancestor {
      margin-bottom: 0;
    }

    .tile.is-parent {
      padding-bottom: 0;

      .table.is-bordered.is-striped.is-narrow {
        margin-bottom: 0;
      }
    }

    .right-side {
      float: right;
    }

    table.is-bordered.is-striped.is-narrow {
      min-width: 19rem;
      max-width: 19rem;
    }
  }

  .template-body-items {
    height: 17cm;
    padding: 1rem 2rem;
    border-bottom: solid 2px #ddd;
    display: flex;
    flex-direction: column;

    th,
    td {
      text-align: center;
    }

    .tile.is-ancestor {
      margin-bottom: 0;
    }

    .tile.is-parent {
      padding-bottom: 0;

      .table.is-bordered.is-striped.is-narrow {
        margin: 0;
      }
    }

    .bottom-details {
      display: flex;
      justify-content: space-between;

      .part-one {
        border: solid 1px #ddd;
        width: 60%;

        .blank {
          padding-top: 0.5rem;
          height: 50%;
          border-bottom: solid 1px #ddd;
        }

        .amount-in-words {
          padding-top: 0.5rem;
          height: 50%;
        }
      }

      .table-responsive {
        width: 100%;
        float: right;
      }
    }
  }

  .template-bottom {
    max-height: 3cm;
    padding: 1rem;
    display: flex;
    justify-content: space-between;

    .part-one {
      max-width: 23rem;

      .spacing {
        padding-top: 1rem;
      }
    }

    .part-two {
      height: 7rem;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      align-items: center;

      p {
        font-weight: 700;
      }
    }
  }
}
</style>
