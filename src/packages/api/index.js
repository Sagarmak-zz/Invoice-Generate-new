import HTTP from "@/packages/http";
import { LOGIN } from "./endpoints.js";

export default {
  login(data) {
    return HTTP.post(LOGIN, { ...data }).then(({ data }) => data);
  }
};
