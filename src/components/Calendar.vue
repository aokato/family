<template>
  <v-calendar :attributes="attributes" is-expanded />
  <!-- <div id="calender">カレンダー</div> -->
</template>
<script>
import Vue from "vue";
import VCalendar from "v-calendar";
import { db } from "@/firebase";

Vue.use(VCalendar);

export default {
  data() {
    const todos = [
      {
        description: "フットサル",
        isComplete: false,
        dates: new Date(2020, 2, 27),
        color: "red",
      },
    ];
    return {
      incId: todos.length,
      todos,
      event: [],
    };
  },
  firestore: {
    event: db.collection("event"),
  },

  computed: {
    attributes() {
      return [
        {
          key: "today",
          highlight: "blue",
          dates: new Date(),
        },

        // Attributes for todos
        ...this.todos.map(todo => ({
          dates: todo.dates,
          highlight: {
            color: todo.color,
            class: todo.isComplete ? "opacity-75" : "",
          },
          popover: {
            label: todo.description,
          },
          customData: todo,
        })),
      ];
    },
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
