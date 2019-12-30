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

  //bills
  [AT.GET_BILLS]: context => {
    return api.getBills().then(response => context.commit(MT.SET_BILLS, response));
  },
  // get last invoice number
  [AT.INVOICE_NUMBER]: context => {
    return api.getLastBill().then(response => response);
  },
  [AT.CHECK_INVOICE]: (context, data) => {
    return api.checkInvoice(data).then(response => response);
  },
  [AT.SUBMIT_BILL]: (context, data) => {
    return api.submitBill(data).then(response => {
      context.dispatch(AT.GET_BILLS);
      return response;
    });
  },

  // chalan
  [AT.GET_CHALANS]: context => {
    return api.getChalans().then(response => context.commit(MT.SET_CHALLANS, response));
  },
  [AT.GET_LAST_CHALAN]: context => {
    return api.getLastChalan().then(response => response);
  },
  [AT.CHECK_CHALAN]: (context, data) => {
    return api.checkChalan(data).then(response => response);
  },
  [AT.SUBMIT_CHALAN]: (context, data) => {
    return api.submitChalan(data).then(response => {
      context.dispatch(AT.GET_CHALANS);
      return response;
    });
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
  [AT.ADD_CUSTOMER]: (context, data) => {
    return api.addCustomer(data).then(response => {
      context.dispatch(AT.GET_CUSTOMERS);
      return response;
    });
  },
  [AT.EDIT_CUSTOMER]: (context, data) => {
    return api.editCustomer(data).then(response => {
      context.dispatch(AT.GET_CUSTOMERS);
      return response;
    });
  },

  // products
  [AT.GETTING_PRODUCTS]: (context, value) => context.commit(MT.SET_GETTING_PRODUCTS, value),
  [AT.GET_PRODUCTS]: context => {
    context.dispatch(AT.GETTING_PRODUCTS, true);
    return api
      .getProducts()
      .then(response => context.commit(MT.SET_PRODUCTS, response))
      .finally(() => context.dispatch(AT.GETTING_PRODUCTS, false));
  },
  [AT.ADD_PRODUCT]: (context, data) => {
    return api.addProduct(data).then(response => {
      context.dispatch(AT.GET_PRODUCTS);
      return response;
    });
  },
  [AT.EDIT_PRODUCT]: (context, data) => {
    return api.editProduct(data).then(response => {
      context.dispatch(AT.GET_PRODUCTS);
      return response;
    });
  },

  // states
  [AT.GETTING_STATES]: (context, value) => context.commit(MT.SET_GETTING_STATES, value),
  [AT.GET_STATES]: context => {
    context.dispatch(AT.GETTING_STATES, true);
    return api
      .getStates()
      .then(response => context.commit(MT.SET_STATES, response))
      .finally(() => context.dispatch(AT.GETTING_STATES, false));
  },
  [AT.ADD_STATE]: (context, data) => api.addState(data).then(response => response),
  [AT.EDIT_STATE]: (context, data) => api.editState(data).then(response => response),

  // settings
  [AT.USER_DETAILS]: context => {
    return api.getUserDetails().then(response => context.commit(MT.SET_USER, response));
  },
  [AT.UPDATE_USER_DETAILS]: (context, data) => api.editUserDetails(data).then(response => response),
  [AT.ADD_ADMIN_USER]: (context, data) => api.addAdminUser(data).then(response => response)
};
