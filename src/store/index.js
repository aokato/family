import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {},
    status: false,
  },
  mutations: {
    setUser(state, user) {
      state.user = user; //firebaseが返したユーザー情報
    },
    setStatus(state, status) {
      state.status = status; //ログインしてるかどうか true or false
    },
    destroyUser(state, user) {
      state.user = user;
    },
    destroyStatus(state, status) {
      state.status = status;
    },
  },
  getters: {
    user(state) {
      return state.user;
    },
    isSignedIn(state) {
      return state.status;
    },
  },
});
