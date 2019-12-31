import Vue from "vue";
import { extend } from "vee-validate";
import {
  required,
  email,
  alpha_num,
  min_value,
  max_value,
  length,
  integer,
  regex,
  required_if
} from "vee-validate/dist/rules";

// register VeeValidate rules
extend("required", required);
extend("email", email);
extend("alpha_num", alpha_num);
extend("min_value", min_value);
extend("max_value", max_value);
extend("length", length);
extend("integer", integer);
extend("regex", regex);
extend("required_if", required_if);
