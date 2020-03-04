<template>
  <div id="textbooks">
    <div id="textbooks-list">
      <div id="course-tab-container">
        <div class="tab" v-bind:class="{ web: web }" @click="webcourse()">
          <span>Web</span>
        </div>
        <div class="tab" v-bind:class="{ game: game }" @click="gamecourse()">
          <span>Game</span>
        </div>
        <div class="tab" v-bind:class="{ ios: ios }" @click="ioscourse()">
          <span>iOS</span>
        </div>
        <div class="tab" v-bind:class="{ webex: webex }" @click="webexcourse()">
          <span>WebEx</span>
        </div>
      </div>
      <div id="list-container">
        <Web v-show="web"></Web>

        <Game v-show="game"></Game>

        <Ios v-show="ios"></Ios>

        <WebEx v-show="webex">></WebEx>
      </div>
    </div>
  </div>
</template>
<script>
import Web from "@/components/Web.vue";
import Game from "@/components/Game.vue";
import Ios from "@/components/Ios.vue";
import WebEx from "@/components/WebEx.vue";
export default {
  components: {
    Web,
    Game,
    Ios,
    WebEx,
  },
  data() {
    return {
      web: true,
      game: false,
      ios: false,
      webex: false,
    };
  },
  methods: {
    webcourse: function() {
      this.web = true;
      this.game = false;
      this.ios = false;
      this.webex = false;
    },
    gamecourse: function() {
      this.web = false;
      this.game = true;
      this.ios = false;
      this.webex = false;
    },
    ioscourse: function() {
      this.web = false;
      this.game = false;
      this.ios = true;
      this.webex = false;
    },
    webexcourse: function() {
      this.web = false;
      this.game = false;
      this.ios = false;
      this.webex = true;
    },
  },
};
</script>
<style lang="scss" scoped>
.web {
  background: #ff3d55;
}
.game {
  background: #4a78ff;
}
.ios {
  background: #ff8546;
}
.webex {
  background: #e4c308;
}

@media screen and (min-width: 1024px) {
  #textbooks {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-top: 20px;
    #textbooks-list {
      width: 80%;
      min-height: 70vh;
      background: white;
      #course-tab-container {
        width: 100%;
        height: 70px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        box-shadow: 0 5px 10px 5px rgba(0, 0, 0, 0.1);
        .tab {
          width: 25%;
          height: 70px;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          font-weight: bold;
          position: relative;
          cursor: pointer;
          .tab::after {
            position: absolute;
            content: "";
            display: block;
            width: 0;
            top: 70px;
            transition: width 0.3s;
            border-bottom: 2px solid #2b546a;
          }
          .tab:hover::after {
            width: 100%;
          }
        }
        .tab:hover {
        }
      }
    }
  }
}
@media screen and (min-width: 700px) and (max-width: 1024px) {
  #textbooks {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-top: 50px;
    #textbooks-list {
      width: 80%;
      min-height: 70vh;
      background: white;
      #course-tab-container {
        width: 100%;
        height: 50px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        box-shadow: 0 5px 10px 5px rgba(0, 0, 0, 0.1);
        .tab {
          width: 25%;
          height: 50px;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          font-weight: bold;
          position: relative;
          cursor: pointer;
          .tab::after {
            position: absolute;
            content: "";
            display: block;
            width: 0;
            top: 70px;
            transition: width 0.3s;
            border-bottom: 2px solid #2b546a;
          }
          .tab:hover::after {
            width: 100%;
          }
        }
        .tab:hover {
        }
      }
    }
  }
}
@media screen and (min-width: 350px) and (max-width: 700px) {
  #textbooks {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-top: 50px;
    #textbooks-list {
      width: 90%;
      min-height: 70vh;
      background: white;
      #course-tab-container {
        width: 100%;
        height: 50px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        box-shadow: 0 5px 10px 5px rgba(0, 0, 0, 0.1);
        .tab {
          width: 25%;
          height: 50px;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          font-weight: bold;
          position: relative;
          cursor: pointer;
          .tab::after {
            position: absolute;
            content: "";
            display: block;
            width: 0;
            top: 70px;
            transition: width 0.3s;
            border-bottom: 2px solid #2b546a;
          }
          .tab:hover::after {
            width: 100%;
          }
        }
        .tab:hover {
        }
      }
    }
  }
}
</style>
