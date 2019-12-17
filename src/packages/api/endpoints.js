export const LOGIN = "/login";
export const USER_DETAILS = "/userdetails";
export const GET_CUSTOMERS = "/customers";
export const PRODUCTS = id => {
  if (id) {
    return `/products/${id}`;
  }
  return `/products`;
};
export const GET_BILLS = "/bills";
export const GET_CHALLANS = "/challans";
export const GET_STATES = "/states";
