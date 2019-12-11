import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import theme from "@/plugins/vuetify/theme";
import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

const opts = {
  theme: {
    themes: {
      light: theme
    }
  },
  iconfont: "fa"
};

export default new Vuetify(opts);
