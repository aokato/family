<template>
  <div class="container">
    <div class="login-container">
      <button type="button" @click="doLogin" class="btn-square-above-look">
        <span>さあ、今日も頑張ろうか</span>
      </button>
    </div>
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
          db.collection("public-users")
            .doc(result.user.uid)
            .get()
            .then(doc => {
              if (doc.exists) {
                const publicUser = {
                  id: doc.id,
                  ...doc.data(),
                };
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
                db.collection("private-users")
                  .doc(result.user.uid)
                  .set({
                    email: result.user.email,
                  });
                db.collection("public-users")
                  .doc(result.user.uid)
                  .get();
                db.collection("private-users")
                  .doc(result.user.id)
                  .get()
                  .then(doc => {
                    const publicUser = {
                      id: doc.id,
                      ...doc.data(),
                    };
                    const privateUser = {
                      id: doc.id,
                      ...doc.data(),
                    };
                    store.commit("setPublicUser", publicUser);
                    store.commit("setPrivateUser", privateUser);
                    router.push("/");
                  })
                  .catch(error => {
                    this.errorMessage = error.message;
                    this.showError = true;

                    router.push("/login");
                  });
              }
            });
        })
        .catch(error => {
          this.errorMessage = error.message;
          this.showError = true;
        });
    },
  },
};
</script>

<style scoped>
.container {
  margin-top: 300px;
  margin-right: auto;
  margin-left: auto;
}

.btn-square-above-look {
  display: inline-block;
  position: relative;
  padding: 0.35em 1em;
  background: #668ad8; /*ボタン色*/
  color: #fff;
  text-decoration: none;
}

.btn-square-above-look:before {
  content: "";
  position: absolute;
  top: -16px;
  left: 0;
  width: -webkit-calc(100% - 16px);
  width: calc(100% - 16px);
  height: 0;
  border: solid 8px transparent;
  border-bottom-color: #8eacec; /*ボタン色より明るめの色に*/
}

.btn-square-above-look:active {
  /*押したとき*/
  padding: 0.32em 0.9em;
  -webkit-transform: translateY(-2px);
  transform: translateY(-2px);
}

.btn-square-above-look:active:before {
  width: -webkit-calc(100% - 12px);
  width: calc(100% - 12px);
}

.btn-square-above-look:active:before {
  top: -12px;
  border-width: 6px;
}
</style>
