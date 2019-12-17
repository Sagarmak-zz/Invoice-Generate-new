import * as MT from "./mutationTypes";

export default {
  [MT.SET_SNACKBAR]: (state, data) => (state.snackbar = data),

  [MT.SET_USER]: (state, data) => (state.user = data),
  [MT.SET_BILLS]: (state, data) => (state.bills = data),
  [MT.SET_CHALLANS]: (state, data) => (state.challans = data),
  [MT.SET_STATES]: (state, data) => (state.states = data),

  // custoemrs
  [MT.SET_GETTING_CUSTOMERS]: (state, data) => {
    console.log(data);
    state.gettingCustomers = data;
  },
  [MT.SET_CUSTOMERS]: (state, data) => (state.customers = data),

  // products
  [MT.SET_GETTING_PRODUCTS]: (state, data) => (state.gettingProducts = data),
  [MT.SET_PRODUCTS]: (state, data) => (state.products = data)
};
