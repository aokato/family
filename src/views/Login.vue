<template>
  <div class="login">
    <button type="button" @click="doLogin">
      <span>Google ログイン</span>
    </button>
  </div>
</template>

<script>
import router from "@/router/index.js";
import firebase from "firebase";
import store from "@/store";
import { db } from "@/firebase";

export default {
  data() {
    return {
      errorMessage: "",
      showError: false,
    };
  },
  methods: {
    doLogin() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(result => {
          console.log(result.user.uid);
          db.collection("public-users")
            .doc(result.user.uid)
            .get()
            .then(doc => {
              console.log(doc.exists);
              if (doc.exists) {
                const publicUser = {
                  id: doc.id,
                  ...doc.data(),
                };
                console.log(publicUser);
                store.commit("setPublicUser", publicUser);
                router.push("/");
              } else {
                db.collection("public-users")
                  .doc(result.user.uid)
                  .set({
                    name: "ゲスト",
                    course: [],
                    term: "",
                    status: "none",
                    role: "guest",
                  });
                db.collection("public-users")
                  .doc(result.user.uid)
                  .get()
                  .then(doc => {
                    const publicUser = {
                      id: doc.id,
                      ...doc.data(),
                    };
                    store.commit("setPublicUser", publicUser);
                    console.log("はいったよん");
                    router.push("/");
                  })
                  .catch(error => {
                    console.error("できてないよ", error);
                    router.push("/login");
                  });
              }
            });
        })
        .catch(error => {
          console.log(error);
          this.errorMessage = error.message;
          this.showError = true;
        });
    },
  },
};
</script>

<style>
.login {
  margin-top: 300px;
}
</style>
