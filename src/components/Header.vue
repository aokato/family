<template>
  <header>
    <div id="logo-container">
      <a href="https://geek-salon.com/">
        <img src="@/assets/geeksalon_icon_white.png" />
      </a>
    </div>
    <router-link to="/" class="mobile-hidden">
      <div class="header-component">
        Top
      </div>
    </router-link>
    <router-link to="/events" class="mobile-hidden">
      <div class="header-component">
        Events
      </div>
    </router-link>
    <router-link to="/products" class="mobile-hidden">
      <div class="header-component">
        Products
      </div>
    </router-link>
    <router-link to="/admin" class="mobile-hidden" v-if="userRole === 'mentor'">
      <div class="header-component">
        受講生認証
      </div>
    </router-link>
    <router-link
      to="/login"
      class="mobile-hidden"
      v-if="isCurrentUser === null"
    >
      <div class="header-component">
        ログイン
      </div>
    </router-link>

    <a @click="doLogout" class="mobile-hidden" v-if="isCurrentUser !== null">
      <div class="header-component">
        Logout
      </div>
    </a>
    <router-link
      to="/register"
      class="mobile-hidden"
      v-if="userStatus === 'none' && isCurrentUser !== null"
    >
      <div class="header-component">
        初めての人～
      </div>
    </router-link>
    <div class="nameIcon">
      <p class="icon">{{ userIcon }}</p>
      <p class="hello">さんこんにちは</p>
    </div>
    <span
      class="menu-trigger slide"
      :class="{ active: isActive }"
      @click="isActive = !isActive"
    >
      <span></span>
      <span></span>
      <span></span>
    </span>
    <transition name="right">
      <div id="mobile-menu" v-show="isActive" class="pc-tab-hidden">
        <div id="mobile-link-container">
          <router-link to="/">
            <span @click="isActive = false">Top</span>
          </router-link>
          <router-link to="/events">
            <span @click="isActive = false"> Events</span>
          </router-link>
          <router-link to="/products">
            <span @click="isActive = false"> Products</span>
          </router-link>
          <a @click="doLogout" v-if="isCurrentUser !== null">
            <span @click="isActive = false">
              Logout
            </span>
          </a>
          <router-link
            to="/register"
            v-if="userStatus === 'none' && isCurrentUser !== null"
          >
            <span @click="isActive = false">
              初めての人～
            </span>
          </router-link>
        </div>
      </div>
    </transition>
  </header>
</template>
<script>
import firebase from "firebase";
import router from "@/router/index.js";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      isActive: false,
      errorMessage: "",
      showError: false,
      userIcon: this.$store.state.publicUser.name,
    };
  },
  computed: mapGetters(["isCurrentUser", "userStatus", "userRole"]),
  methods: {
    doLogout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$store.commit("setPublicUser", {});
          this.$store.commit("setPrivateUser", {});
          router.push("/login");
        })
        .catch(error => {
          this.errorMessage = error.message;
          this.showError = true;
        });
    },
  },
};
</script>
<style lang="scss" scoped>
@media screen and (min-width: 1024px) {
  header {
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.1);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    background: white;
    a {
      text-decoration: none;
      color: #2b546a;
      display: inline-block;
    }

    .header-component {
      width: 150px;
      height: 50px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 1rem;
      font-weight: bold;
      position: relative;
    }
    .header-component:hover {
      background: rgba(0, 0, 0, 0.1);

      cursor: pointer;
    }
    .header-component::after {
      position: absolute;
      content: "";
      display: block;
      width: 0;
      top: 50px;
      transition: width 0.3s;

      border-bottom: 2px solid #2b546a;
    }

    .header-component:hover::after {
      width: 100%;
    }
    #logo-container {
      width: 70px;
      height: 50px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      background: #40b883;

      img {
        display: inline-block;
        width: 35px;
        height: 35px;
        margin-top: 5px;
        margin-right: 3px;
      }
    }
    #logo-container:hover {
    }
    .slide {
      display: none;
    }
    .pc-tab-hidden {
      display: none;
    }
    .nameIcon {
      margin-left: auto;
      margin-right: 10px;
    }
    .icon {
      margin-top: 0px;
      margin-bottom: 0px;
      font-weight: 800;
    }
    .hello {
      margin: 0;
      font-family: monospace;
    }
  }
}
@media screen and (min-width: 700px) and (max-width: 1024px) {
  header {
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.1);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    background: white;

    a {
      text-decoration: none;
      color: #2b546a;
      display: inline-block;
    }

    .header-component {
      width: 100px;
      height: 50px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 1rem;
      font-weight: bold;
      position: relative;
    }
    .header-component:hover {
      background: rgba(0, 0, 0, 0.1);

      cursor: pointer;
    }
    .header-component::after {
      position: absolute;
      content: "";
      display: block;
      width: 0;
      top: 50px;
      transition: width 0.3s;

      border-bottom: 2px solid #2b546a;
    }

    .header-component:hover::after {
      width: 100%;
    }
    #logo-container {
      width: 70px;
      height: 50px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      background: #40b883;

      img {
        display: inline-block;
        width: 35px;
        height: 35px;
        margin-top: 5px;
        margin-right: 3px;
      }
    }
    #logo-container:hover {
    }
    .slide {
      display: none;
    }
    .pc-tab-hidden {
      display: none;
    }
  }
}
@media screen and (min-width: 350px) and (max-width: 700px) {
  header {
    width: 100%;
    height: 60px;
    padding-right: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.1);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    background: white;
    a {
      text-decoration: none;
      color: #2b546a;
      display: inline-block;
    }

    .mobile-hidden {
      display: none;
    }
    #logo-container {
      width: 70px;
      height: 60px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      background: #40b883;

      img {
        display: inline-block;
        width: 35px;
        height: 35px;
        margin-top: 5px;
        margin-right: 3px;
      }
    }
    .slide {
      display: block;
    }
    .menu-trigger,
    .menu-trigger span {
      display: inline-block;
      transition: all 0.4s;
      box-sizing: border-box;
    }
    .menu-trigger {
      position: relative;
      width: 50px;
      height: 44px;
      z-index: 12;
    }
    .menu-trigger span {
      position: absolute;
      left: 0;
      width: 90%;
      height: 4px;
      background-color: black;
      border-radius: 4px;
    }
    .menu-trigger span:nth-of-type(1) {
      top: 0;
    }
    .menu-trigger span:nth-of-type(2) {
      top: 20px;
    }
    .menu-trigger span:nth-of-type(3) {
      bottom: 0;
    }
    .menu-trigger.active span:nth-of-type(1) {
      -webkit-transform: translateY(20px) rotate(-315deg);
      transform: translateY(20px) rotate(-315deg);
      background-color: white;
    }
    .menu-trigger.active span:nth-of-type(2) {
      opacity: 0;
    }
    .menu-trigger.active span:nth-of-type(3) {
      -webkit-transform: translateY(-20px) rotate(315deg);
      transform: translateY(-20px) rotate(315deg);
      background-color: white;
    }
    .right-enter-active,
    .right-leave-active {
      transform: translate(0px, 0px);
      transition: transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;
    }

    .right-enter,
    .right-leave-to {
      transform: translateX(100vw) translateX(0px);
    }
    #mobile-menu {
      position: fixed;
      width: 100%;
      top: 0;
      right: 0;
      height: 100vh;
      background: rgba(0, 0, 0, 0.7);
      z-index: 11;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      #mobile-link-container {
        width: 80%;
        height: 70vh;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        a {
          color: white;
          font-size: 1.5rem;
        }
      }
    }
  }
}
</style>
