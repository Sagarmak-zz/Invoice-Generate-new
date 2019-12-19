import Vue from "vue";
import { extend } from "vee-validate";
import { required, email } from "vee-validate/dist/rules";

// register VeeValidate rules
extend("required", required);
extend("email", email);
