import * as AT from "./actionTypes";
import * as MT from "./mutationTypes";
import api from "@/packages/api";
import Auth from "@/packages/auth";

export default {
  [AT.SNACKBAR]: (context, data) => {
    context.commit(MT.SET_SNACKBAR, {
      status: true,
      ...data
    });
  },

  [AT.LOGIN]: (context, data) => {
    return api
      .login(data)
      .then(response => {
        Auth.setToken(response.token);
        return response;
      })
      .catch(err => {
        const errorMessage =
          (err && err.response && err.response.data && err.response.data.message) || "Error while Logging in";
        context.dispatch(AT.SNACKBAR, {
          color: "red",
          text: errorMessage
        });
      });
  },

  [AT.USER_DETAILS]: context => {
    return api.userDetails().then(response => context.commit(MT.SET_USER, response));
  },

  [AT.GET_BILLS]: context => {
    return api.getBills().then(response => context.commit(MT.SET_BILLS, response));
  },

  [AT.GET_CHALLANS]: context => {
    return api.getChalans().then(response => context.commit(MT.SET_CHALLANS, response));
  },

  [AT.GET_STATES]: context => {
    return api.getStates().then(response => context.commit(MT.SET_STATES, response));
  },

  // customers
  [AT.GETTING_CUSTOMERS]: (context, value) => context.commit(MT.SET_GETTING_CUSTOMERS, value),
  [AT.GET_CUSTOMERS]: context => {
    context.dispatch(AT.GETTING_CUSTOMERS, true);
    return api
      .getCustomers()
      .then(response => context.commit(MT.SET_CUSTOMERS, response))
      .finally(() => context.dispatch(AT.GETTING_CUSTOMERS, false));
  },
  [AT.ADD_CUSTOMER]: (context, data) => api.addCustomer(data).then(response => response),
  [AT.EDIT_CUSTOMER]: (context, data) => api.editCustomer(data).then(response => response),

  // products
  [AT.GETTING_PRODUCTS]: (context, value) => context.commit(MT.SET_GETTING_PRODUCTS, value),
  [AT.GET_PRODUCTS]: context => {
    context.dispatch(AT.GETTING_PRODUCTS, true);
    return api
      .getProducts()
      .then(response => context.commit(MT.SET_PRODUCTS, response))
      .finally(() => context.dispatch(AT.GETTING_PRODUCTS, false));
  },
  [AT.ADD_PRODUCT]: (context, data) => api.addProduct(data).then(response => response),
  [AT.EDIT_PRODUCT]: (context, data) => api.editProduct(data).then(response => response)
};
