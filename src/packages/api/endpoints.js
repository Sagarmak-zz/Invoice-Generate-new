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
export const CHALLANS = "/challans";
export const GET_LAST_CHALLAN = "/challanNumber";
// check if chalan invoice number is available
export const CHECK_CHALAN = "/checkChallan";
export const STATES = id => {
  if (id) {
    return `/states/${id}`;
  }
  return `/states`;
};
