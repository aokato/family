import Vue from "vue";
import firebase from "firebase";
import "firebase/firestore";
import { firestorePlugin } from "vuefire";
import "@firebase/auth";
import store from "./store";

Vue.use(firestorePlugin);

const firebaseConfig = {
  apiKey: "AIzaSyAnvqJ8nOU75GIRplSxqoF2AFrVH4FNas4",
  authDomain: "family-98a8c.firebaseapp.com",
  databaseURL: "https://family-98a8c.firebaseio.com",
  projectId: "family-98a8c",
  storageBucket: "family-98a8c.appspot.com",
  messagingSenderId: "142679849887",
  appId: "1:142679849887:web:b7787396efd5ff677adbaa",
  measurementId: "G-S6TRTQYBKT",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const db = firebase.firestore();

export default {
  // 初期化
  init() {
    // configを読み込んで初期化
    // firebase.initializeApp(firebaseConfig);
    // タブを閉じるまで更新されても保持
    // firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
  },
  // Googleログインを使ってログイン
  // login() {
  //   const provider = new firebase.auth.GoogleAuthProvider();
  //   firebase
  //     .auth()
  //     .signInWithPopup(provider)
  //     .then(result => {
  //       console.log(result.user);
  //       router.push("/");
  //     })
  //     .catch(error => {
  //       console.log(error);
  //       this.errorMessage = error.message;
  //       this.showError = true;
  //     });
  // },
  // logout() {
  //   firebase.auth().signOut();
  // },
  onAuth() {
    firebase.auth().onAuthStateChanged(user => {
      user = user ? user : {};
      store.commit("setUser", user);
      store.commit("setSignIn", user.uid ? true : false);
    });
  },
};
