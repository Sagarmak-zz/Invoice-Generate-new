import * as MT from "./mutationTypes";

export default {
  [MT.SET_USER]: (state, data) => (state.user = data),
  [MT.SET_SNACKBAR]: (state, data) => (state.snackbar = data)
};
