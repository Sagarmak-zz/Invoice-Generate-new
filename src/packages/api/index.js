import HTTP from "@/packages/http";
import * as EP from "./endpoints.js";

export default {
  login(data) {
    return HTTP.post(EP.LOGIN, { ...data }).then(({ data }) => data);
  },

  //bills
  getBills() {
    return HTTP.get(EP.BILLS).then(({ data }) => data);
  },
  // get last invoice number
  getLastBill() {
    return HTTP.get(EP.INVOICE_NUMBER).then(({ data }) => data);
  },
  checkInvoice(data) {
    return HTTP.get(`${EP.CHECK_INVOICE}/${data.invoiceNo}/${data.fiscalYear}`).then(({ data }) => data);
  },
  submitBill(data) {
    return HTTP.post(EP.BILLS, { ...data }).then(({ data }) => data);
  },

  // chalans
  getChalans() {
    return HTTP.get(EP.CHALLANS).then(({ data }) => data);
  },
  getLastChalan() {
    return HTTP.get(EP.GET_LAST_CHALLAN).then(({ data }) => data);
  },
  checkChalan(data) {
    return HTTP.get(`${EP.CHECK_CHALAN}/${data.chalanNo}/${data.fiscalYear}`).then(({ data }) => data);
  },
  submitChalan(data) {
    return HTTP.post(EP.CHALLANS, { ...data }).then(({ data }) => data);
  },

  // customers
  getCustomers() {
    return HTTP.get(EP.CUSTOMERS()).then(({ data }) => data);
  },
  addCustomer(data) {
    return HTTP.post(EP.CUSTOMERS(), { ...data }).then(({ data }) => data);
  },
  editCustomer(data) {
    return HTTP.patch(EP.CUSTOMERS(data.id), { ...data }).then(({ data }) => data);
  },

  // products
  getProducts() {
    return HTTP.get(EP.PRODUCTS()).then(({ data }) => data);
  },
  addProduct(data) {
    return HTTP.post(EP.PRODUCTS(), { ...data }).then(({ data }) => data);
  },
  editProduct(data) {
    return HTTP.patch(EP.PRODUCTS(data.productId), { ...data }).then(({ data }) => data);
  },

  // states
  getStates() {
    return HTTP.get(EP.STATES()).then(({ data }) => data);
  },
  addState(data) {
    return HTTP.post(EP.STATES(), { ...data }).then(({ data }) => data);
  },
  editState(data) {
    return HTTP.patch(EP.STATES(data.stateCode), { ...data }).then(({ data }) => data);
  },

  // userDetails
  getUserDetails() {
    return HTTP.get(EP.USER_DETAILS()).then(({ data }) => data);
  },
  editUserDetails(data) {
    return HTTP.patch(EP.USER_DETAILS(data.id), { ...data.data }).then(({ data }) => data);
  },
  addAdminUser(data) {
    return HTTP.post(EP.USER_DETAILS(), { ...data }).then(({ data }) => data);
  }
};
