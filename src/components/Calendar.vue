<template>
  <v-calendar :attributes="attrs" />
  <!-- <div id="calender">カレンダー</div> -->
</template>
<script>
import Vue from "vue";
import VCalendar from "v-calendar";
Vue.use(VCalendar);

export default {
  data() {
    return {
      attrs: [
        {
          key: "today",
          highlight: "red",
          dates: new Date(),
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
@media screen and (min-width: 1024px) {
  #calender {
    background: white;
    width: 70%;
    border: 2px solid black;
  }
}
@media screen and (min-width: 700px) and (max-width: 1024px) {
  #calender {
    background: white;
    width: 70%;
    border: 2px solid black;
  }
}
@media screen and (min-width: 350px) and (max-width: 700px) {
  #calender {
    background: white;
    width: 70%;
    border: 2px solid black;
  }
}
</style>
