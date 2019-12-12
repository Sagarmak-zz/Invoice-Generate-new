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

  [AT.GET_CUSTOMERS]: context => {
    return api.getCustomers().then(response => context.commit(MT.SET_CUSTOMERS, response));
  },

  [AT.LIST_CUSTOMERS]: context => {
    return api.listCustomers().then(response => context.commit(MT.SET_LIST_CUSTOMERS, response));
  },

  [AT.GET_PRODUCTS]: context => {
    return api.getProducts().then(response => context.commit(MT.SET_PRODUCTS, response));
  },

  [AT.GET_BILLS]: context => {
    return api.getBills().then(response => context.commit(MT.SET_BILLS, response));
  },

  [AT.GET_CHALLANS]: context => {
    return api.getChalans().then(response => context.commit(MT.SET_CHALLANS, response));
  },

  [AT.GET_STATES]: context => {
    return api.getStates().then(response => context.commit(MT.SET_STATES, response));
  }
};
