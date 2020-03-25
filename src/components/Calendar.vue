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
    return {
      todos: [],
      event: [],
      current_user_info: [],
    };
  },
  firestore: {
    event: db.collection("event"),
  },
  computed: {
    attributes() {
      const events = this.event;
      events.forEach(event => {
        const year = event.date.substr(0, 4);
        const month = event.date.substr(6, 1);
        const months = month - 1;
        const date = event.date.substr(8, 2);
        const post = {
          description: event.title,
          isComplete: false,
          dates: new Date(year, months, date),
          color: "red",
        };
        this.todos.push(post);
      });
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
  methods: {
    add(post) {
      this.todos.push(post);
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
