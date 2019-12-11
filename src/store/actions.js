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
        const errorMessage =
          (err &&
            err.response &&
            err.response.data &&
            err.response.data.message) ||
          "Error while Logging in";
        context.dispatch(AT.SNACKBAR, {
          color: "red",
          text: errorMessage
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
