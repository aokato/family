import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase";
import createPersistedState from "vuex-persistedstate";

// import db from "@/firebase";

Vue.use(Vuex);

const initialState = {
  publicUser: {},
  privateUser: {},
  currentUser: null,
};

const store = new Vuex.Store({
  state: initialState,

  mutations: {
    setPublicUser(state, publicUser) {
      state.publicUser = publicUser;
    },
    setPrivateUser(state, privateUser) {
      state.privateUser = privateUser;
    },
    setCurrentUser(state, currentUser) {
      state.currentUser = currentUser;
    },
  },
  getters: {
    isVerified(state) {
      return state.publicUser.emailVerified;
    },
    userStatus(state) {
      return state.publicUser.status;
    },
  },
  plugins: [createPersistedState()],
});

firebase.auth().onAuthStateChanged(currentUser => {
  store.commit("setCurrentUser", currentUser);
});

export default store;
