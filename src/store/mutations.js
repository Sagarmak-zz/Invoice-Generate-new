import * as MT from "./mutationTypes";

export default {
  [MT.SET_SNACKBAR]: (state, data) => (state.snackbar = data),

  [MT.SET_USER]: (state, data) => (state.user = data),
  [MT.SET_CUSTOMERS]: (state, data) => (state.customers = data),
  [MT.SET_LIST_CUSTOMERS]: (state, data) => (state.listCustomers = data),
  [MT.SET_PRODUCTS]: (state, data) => (state.products = data),
  [MT.SET_BILLS]: (state, data) => (state.bills = data),
  [MT.SET_CHALLANS]: (state, data) => (state.challans = data),
  [MT.SET_STATES]: (state, data) => (state.states = data)
};
