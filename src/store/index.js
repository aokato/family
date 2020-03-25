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
  real_event: [],
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
    setRealEvent(state, real_event) {
      state.real_event = real_event;
    },
  },
  getters: {
    isVerified(state) {
      return state.publicUser.emailVerified;
    },
    userStatus(state) {
      return state.publicUser.status;
    },
    isCurrentUser(state) {
      return state.currentUser;
    },
  },
  plugins: [createPersistedState()],
});

firebase.auth().onAuthStateChanged(currentUser => {
  store.commit("setCurrentUser", currentUser);
});

export default store;
