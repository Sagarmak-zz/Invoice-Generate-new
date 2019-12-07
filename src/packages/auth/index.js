export default {
  setToken(value) {
    window.localStorage.setItem("token", value);
  },

  getToken() {
    let token = window.localStorage.getItem("token");
    if (!token) {
      return null;
    } else {
      return token;
    }
  },

  destroyToken() {
    window.localStorage.removeItem("token");
  },

  isAuthenticated() {
    if (this.getToken()) {
      return true;
    }
    return false;
  }
};
