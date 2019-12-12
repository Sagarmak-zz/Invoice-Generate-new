import HTTP from "@/packages/http";
import * as EP from "./endpoints.js";

export default {
  login(data) {
    return HTTP.post(EP.LOGIN, { ...data }).then(({ data }) => data);
  },

  userDetails() {
    return HTTP.get(EP.USER_DETAILS).then(({ data }) => data);
  },

  getCustomers() {
    return HTTP.get(EP.GET_CUSTOMERS).then(({ data }) => data);
  },

  listCustomers() {
    return HTTP.get(EP.LIST_CUSTOMERS).then(({ data }) => data);
  },

  getProducts() {
    return HTTP.get(EP.GET_PRODUCTS).then(({ data }) => data);
  },

  getBills() {
    return HTTP.get(EP.GET_BILLS).then(({ data }) => data);
  },

  getChalans() {
    return HTTP.get(EP.GET_CHALLANS).then(({ data }) => data);
  },

  getStates() {
    return HTTP.get(EP.GET_STATES).then(({ data }) => data);
  }
};
