import * as AT from "./actionTypes";
import * as MT from "./mutationTypes";
import api from "@/packages/api";
import Auth from "@/packages/auth";

export default {
  [AT.LOGIN]: (context, data) => {
    return api
      .login(data)
      .then(response => {
        Auth.setToken(response.token);
        return response;
      })
      .catch(err => {
        context.dispatch(SNACKBAR, {
          color: "error",
          text: "Error while Logging in"
        });
      });
  },
  [AT.SNACKBAR]: (context, data) => {
    context.commit(MT.SET_SNACKBAR, {
      status: true,
      ...data
    });
  }
};
