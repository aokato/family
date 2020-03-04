<template>
  <div id="top">
    <div id="top-right-left-container">
      <div id="top-left">
        <div id="status-container">
          <Status></Status>
        </div>
        <div id="next-step-container">
          <NextStep></NextStep>
        </div>
      </div>
      <div id="top-right">
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
      #top-left {
        width: 60%;
        min-height: 100vh;
        padding-top: 50px;
        background: red;
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
      #top-right {
        width: 40%;
        min-height: 100vh;
        padding-top: 50px;
        background: blue;
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
}
@media screen and (min-width: 350px) and (max-width: 700px) {
  #top-left {
    display: none;
  }
  #top-right {
    display: none;
  }
}
</style>
