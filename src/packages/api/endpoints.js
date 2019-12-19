export const LOGIN = "/login";
export const USER_DETAILS = "/userdetails";
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
export const GET_BILLS = "/bills";
export const GET_CHALLANS = "/challans";
export const STATES = id => {
  if (id) {
    return `/states/${id}`;
  }
  return `/states`;
};
export const ADD_ADMIN_USER = "/userDetail/create";
