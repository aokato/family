import Vue from "vue";
import firebase from "firebase";
import "firebase/firestore";
import "firebase/storage";
import { firestorePlugin } from "vuefire";

import "@firebase/auth";
// import store from "./store";

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

export const firestorage = firebase.storage();

export const getCurrentUser = () => {
  return firebase.auth().currentUser;
};
