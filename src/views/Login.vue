<template>
  <div class="login-main">
    あああ
    <input type="text" placeholder="Email" v-model="email" />
    <input type="password" placeholder="Password" v-model="password" />
    <button @click="signUp">サインアップ</button>
  </div>
</template>
<script>
import firebase from "firebase";
// import db from 'firebase.js'

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    signUp: function() {
      console.log(firebase);
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .catch(function() {
          firebase.auth().onAuthStateChanged(user => {
            if (user) {
              this.$router.push("/register");
            } else {
              this.$router.push("/login");
            }
          });
        });
    },
  },
};
</script>
<style scoped>
.login-main {
  margin-top: 100px;
}
</style>
