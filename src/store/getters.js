export default {
  snackbar: state => state.snackbar,
  userDetails: state => state.user,
  bills: state => state.bills,
  challans: state => state.challans,
  states: state => state.states,

  // customers
  gettingCustomers: state => state.gettingCustomers,
  customers: state => state.customers,

  // products
  gettingProducts: state => state.gettingProducts,
  products: state => state.products
};
