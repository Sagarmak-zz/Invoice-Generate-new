export const LOGIN = "/login";
export const USER_DETAILS = id => {
  if (id) {
    return `/userdetails/${id}`;
  }
  return `/userdetails`;
};
export const CUSTOMERS = id => {
  if (id) {
    return `/customers/${id}`;
  }
  return `/customers`;
};
export const PRODUCTS = id => {
  if (id) {
    return `/products/${id}`;
  }
  return `/products`;
};
export const BILLS = "/bills";
export const INVOICE_NUMBER = "/invoiceNumber";
export const CHECK_INVOICE = "/checkInvoice";
export const GET_CHALLANS = "/challans";
export const STATES = id => {
  if (id) {
    return `/states/${id}`;
  }
  return `/states`;
};
