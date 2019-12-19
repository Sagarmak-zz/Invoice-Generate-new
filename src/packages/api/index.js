import HTTP from "@/packages/http";
import * as EP from "./endpoints.js";

export default {
  login(data) {
    return HTTP.post(EP.LOGIN, { ...data }).then(({ data }) => data);
  },

  userDetails() {
    return HTTP.get(EP.USER_DETAILS).then(({ data }) => data);
  },

  getBills() {
    return HTTP.get(EP.GET_BILLS).then(({ data }) => data);
  },

  getChalans() {
    return HTTP.get(EP.GET_CHALLANS).then(({ data }) => data);
  },

  // customers
  getCustomers() {
    return HTTP.get(EP.CUSTOMERS()).then(({ data }) => data.Firms);
  },
  addCustomer(data) {
    return HTTP.post(EP.CUSTOMERS(), { ...data }).then(({ data }) => data);
  },
  editCustomer(data) {
    return HTTP.patch(EP.CUSTOMERS(), { ...data }).then(({ data }) => data);
  },

  // products
  getProducts() {
    return HTTP.get(EP.PRODUCTS()).then(({ data }) => data.products);
  },
  addProduct(data) {
    return HTTP.post(EP.PRODUCTS(), { ...data }).then(({ data }) => data);
  },
  editProduct(data) {
    return HTTP.patch(EP.PRODUCTS(data.productId), { ...data }).then(({ data }) => data);
  },

  // states
  getStates() {
    return HTTP.get(EP.STATES()).then(({ data }) => data.states);
  },
  addState(data) {
    return HTTP.post(EP.STATES(), { ...data }).then(({ data }) => data);
  },
  editState(data) {
    return HTTP.patch(EP.STATES(data.stateCode), { ...data }).then(({ data }) => data);
  },

  addAdminUser(data) {
    return HTTP.post(EP.ADD_ADMIN_USER, { ...data }).then(({ data }) => data);
  }
};
