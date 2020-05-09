import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import lightTheme from "@/plugins/vuetify/lightTheme";
import darkTheme from "@/plugins/vuetify/darkTheme";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: lightTheme,
      dark: darkTheme
    }
  },
  icons: {
    iconfont: "fa"
  }
});
