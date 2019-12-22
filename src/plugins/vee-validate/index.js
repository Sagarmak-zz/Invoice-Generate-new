import Vue from "vue";
import { extend } from "vee-validate";
import { required, email, alpha_num, min, max, length, integer } from "vee-validate/dist/rules";

// register VeeValidate rules
extend("required", required);
extend("email", email);
extend("alpha_num", alpha_num);
extend("min", min);
extend("max", max);
extend("length", length);
extend("integer", integer);
