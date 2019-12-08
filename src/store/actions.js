import * as AT from "./actionTypes";
import * as MT from "./mutationTypes";
import api from "@/packages/api";
import Auth from "@/packages/auth";

export default {
  [AT.LOGIN]: (context, data) => {
    // return Promise
    return api
      .login(data)
      .then(response => {
        Auth.setToken(response.token);
        return true;
      })
      .catch(() => false);
  },
  [AT.SNACKBAR]: (context, data) => {
    context.commit(MT.SET_SNACKBAR, {
      status: true,
      ...data
    });
  }
};
