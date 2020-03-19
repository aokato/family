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

export default {
  data() {
    return {
      errorMessage: "",
      showError: false,
    };
  },
  created: function() {
    // firebase.onAuth();
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
    userStatus() {
      return this.$store.getters.isSignedIn;
    },
  },
  methods: {
    doLogin() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(result => {
          console.log(result);
          let user = {};
          user = result ? result.user : {};
          this.$store.commit("setUser", user);
          this.$store.commit(
            "setStatus",
            result.user.emailVerified ? true : false
          );
          console.log(result.user.emailVerified);
          router.push("/");
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
