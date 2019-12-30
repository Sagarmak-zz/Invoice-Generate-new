import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import theme from "@/plugins/vuetify/theme";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: theme
    }
  },
  icons: {
    iconfont: "fa"
  }
});
