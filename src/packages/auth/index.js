export default {
    setToken(value) {
        window.localStorage.setItem('token', value);
    },

    getToken() {
        window.localStorage.getItem('token');
    },

    destroyToken() {
        window.localStorage.removeItem('token')
      },

    isAuthenticated() {
        if (this.getToken()) {
            return true;
        }
        return false;
    }
};