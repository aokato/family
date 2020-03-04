<template>
  <div id="top">
    <div id="top-right-left-container">
      <div id="tablet-change">
        <div
          class="button"
          v-bind:class="{ button_active: change_tab }"
          @click="change_tab = true"
        >
          メニュー
        </div>
        <div
          class="button"
          v-bind:class="{ button_active: !change_tab }"
          @click="change_tab = false"
        >
          カレンダーたち
        </div>
      </div>
      <div id="top-left-tab" v-show="change_tab">
        <div id="status-container">
          <Status></Status>
        </div>
        <div id="next-step-container">
          <NextStep></NextStep>
        </div>
      </div>
      <div id="top-right-tab" v-show="!change_tab">
        <div id="calender-container">
          <Calendar></Calendar>
        </div>
        <div id="info-container">
          <Info></Info>
        </div>
      </div>
      <div id="top-left-pc">
        <div id="status-container">
          <Status></Status>
        </div>
        <div id="next-step-container">
          <NextStep></NextStep>
        </div>
      </div>
      <div id="top-right-pc">
        <div id="calender-container">
          <Calendar></Calendar>
        </div>
        <div id="info-container">
          <Info></Info>
        </div>
      </div>
    </div>
    <div id="top-bottom">
      <TextBooks></TextBooks>
    </div>
  </div>
</template>
<script>
import Status from "@/components/Status.vue";
import NextStep from "@/components/NextStep.vue";
import Calendar from "@/components/Calendar.vue";
import Info from "@/components/Info.vue";
import TextBooks from "@/components/TextBooks.vue";
export default {
  components: {
    Status,
    NextStep,
    Calendar,
    Info,
    TextBooks,
  },
  data() {
    return {
      change_tab: true,
    };
  },
};
</script>
<style lang="scss" scoped>
@media screen and (min-width: 1024px) {
  #top {
    width: 100%;
    padding-top: 50px;
    min-height: 100vh;
    background: rgba(64, 184, 131, 0.1);
    display: flex;
    flex-direction: column;
    #top-right-left-container {
      display: flex;
      flex-direction: row;
      #tablet-change {
        display: none;
      }
      #top-left-tab {
        display: none;
      }
      #top-right-tab {
        display: none;
      }
      #top-left-pc {
        width: 60%;
        min-height: 100vh;
        padding-top: 50px;

        display: flex;
        flex-direction: column;
        align-items: center;
        #status-container {
          width: 100%;
          height: 40vh;
          display: flex;
          flex-direction: row;
          justify-content: center;
        }
        #next-step-container {
          width: 100%;
          height: 30vh;
          margin-top: 40px;
          display: flex;
          flex-direction: row;
          justify-content: center;
        }
      }
      #top-right-pc {
        width: 40%;
        min-height: 100vh;
        padding-top: 50px;

        display: flex;
        flex-direction: column;
        align-items: center;
        #calender-container {
          width: 100%;
          height: 40vh;
          display: flex;
          flex-direction: row;
          justify-content: center;
        }
        #info-container {
          margin-top: 40px;
          width: 100%;
          height: 40vh;
          display: flex;
          flex-direction: row;
          justify-content: center;
        }
      }
    }
  }
}
@media screen and (min-width: 700px) and (max-width: 1024px) {
  #top {
    width: 100%;
    padding-top: 50px;
    min-height: 100vh;
    background: rgba(64, 184, 131, 0.1);
    display: flex;
    flex-direction: column;
    #top-right-left-container {
      display: flex;
      flex-direction: column;
      #tablet-change {
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 100%;
        height: 50px;
        .button {
          width: 50%;
          height: 50px;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
        }
        .button_active {
          background: rgba(0, 0, 0, 0.2);
        }
      }
      #top-left-pc {
        display: none;
      }
      #top-right-pc {
        display: none;
      }
      #top-left-tab {
        width: 100%;
        min-height: 100vh;
        padding-top: 50px;

        display: flex;
        flex-direction: column;
        align-items: center;
        #status-container {
          width: 100%;
          height: 40vh;
          display: flex;
          flex-direction: row;
          justify-content: center;
        }
        #next-step-container {
          width: 100%;
          height: 30vh;
          margin-top: 40px;
          display: flex;
          flex-direction: row;
          justify-content: center;
        }
      }
      #top-right-tab {
        width: 100%;
        min-height: 100vh;
        padding-top: 50px;

        display: flex;
        flex-direction: column;
        align-items: center;
        #calender-container {
          width: 100%;
          height: 40vh;
          display: flex;
          flex-direction: row;
          justify-content: center;
        }
        #info-container {
          margin-top: 40px;
          width: 100%;
          height: 40vh;
          display: flex;
          flex-direction: row;
          justify-content: center;
        }
      }
    }
  }
}
@media screen and (min-width: 350px) and (max-width: 700px) {
  #top {
    width: 100%;
    padding-top: 50px;
    min-height: 100vh;
    background: rgba(64, 184, 131, 0.1);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    #top-right-left-container {
      display: flex;
      flex-direction: column;
      #tablet-change {
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 100%;
        height: 50px;
        margin-top: 10px;
        .button {
          width: 50%;
          height: 50px;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
        }
        .button_active {
          background: rgba(0, 0, 0, 0.2);
        }
      }
      #top-left-pc {
        display: none;
      }
      #top-right-pc {
        display: none;
      }
      #top-left-tab {
        width: 100%;
        min-height: 100vh;
        padding-top: 50px;

        display: flex;
        flex-direction: column;
        align-items: center;
        #status-container {
          width: 100%;
          height: 40vh;
          display: flex;
          flex-direction: row;
          justify-content: center;
        }
        #next-step-container {
          width: 100%;
          height: 30vh;
          margin-top: 40px;
          display: flex;
          flex-direction: row;
          justify-content: center;
        }
      }
      #top-right-tab {
        width: 100%;
        min-height: 100vh;
        padding-top: 50px;

        display: flex;
        flex-direction: column;
        align-items: center;
        #calender-container {
          width: 100%;
          height: 40vh;
          display: flex;
          flex-direction: row;
          justify-content: center;
        }
        #info-container {
          margin-top: 40px;
          width: 100%;
          height: 40vh;
          display: flex;
          flex-direction: row;
          justify-content: center;
        }
      }
    }
  }
}
</style>
