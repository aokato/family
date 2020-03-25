<template>
  <div id="event">
    <Calendar></Calendar>
    <!-- {{ create_method }} -->
    <!-- {{ event }} -->
    <h1>直近開催されるイベント</h1>
    <div class="card_container">
      <div v-for="(event, index) in real_event" :key="index">
        <section class="card">
          <div v-if="event.event_type === 'A'">
            <img class="card-img" src="@/assets/course_event.jpg" alt="" />
          </div>
          <div v-else-if="event.event_type === 'B'">
            <img class="card-img" src="@/assets/study_event.jpg" alt="" />
          </div>
          <div v-else-if="event.event_type === 'C'">
            <img class="card-img" src="@/assets/futsal_event.jpg" alt="" />
          </div>
          <div v-else>
            <img
              class="card-img"
              src="http://webcreatorbox.com/sample/images/bear.jpg"
              alt=""
            />
          </div>

          <div class="card-content">
            <h1 class="card-title">{{ event.title }}</h1>
            <p>日時：{{ event.date }}</p>
            <p class="card-text">
              {{ event.description }}
            </p>
          </div>
          <div class="card-link">
            <a v-on:click="show(event)" class="button">About</a>
          </div>
        </section>
      </div>
      <modal
        name="hello-world"
        :draggable="true"
        :resizable="true"
        height="auto"
        :scrollable="true"
        @before-open="beforeOpen"
      >
        <div class="modal-header">
          <h2>{{ modal_data.title }}</h2>
        </div>
        <div class="modal-body">
          <p>{{ modal_data.description }}</p>
          <button v-on:click="hide">閉じる</button>
        </div>
      </modal>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { db } from "@/firebase";
import Calendar from "@/components/Calendar.vue";
import VModal from "vue-js-modal";
import store from "@/store";
import moment from "moment";

Vue.use(VModal);

export default {
  components: {
    Calendar,
  },
  filters: {
    moment: function(date) {
      var day = moment.unix(date["seconds"]);
      var output = day.format("YYYY年MM月DD日 HH時 ddd");
            return output;// eslint-disable-line
    },
  },
  data() {
    return {
      real_event: [],
      event: [],
      modal_data: [],
      current_uid: [],
      users: [],
      current_user_info: [],
    };
  },
  firestore: {
    users: db.collection("public-users"),
    //   .doc(store.state.currentUser.uid),
    event: db.collection("event").orderBy("date"),
  },
  watch: {
    event(event) {
      const current_user_id = store.state.currentUser.uid;
      this.users.forEach(user => {
        if (user.id == current_user_id) {
          this.current_user_info.push(user);
        }
      });
      const events = event;
      events.forEach(event => {
        const target_course = event.target_course;
        const target_term = event.target_term;
        const current_user_course = this.current_user_info[0].course;
        const current_user_term = this.current_user_info[0].term;
        if (
          target_course.includes(current_user_course) &&
          target_term.includes(current_user_term)
        ) {
          this.real_event.push(event);
        }
      });
    },
  },
  methods: {
    show: function(event) {
      this.$modal.show("hello-world", { event });
    },
    hide: function() {
      this.$modal.hide("hello-world");
    },
    beforeOpen(event) {
      this.modal_data = event.params.event;
    },
  },
};
</script>
<style lang="scss" scoped>
#event {
  width: 100%;
  margin-top: 60px;
  min-height: 100vh;
  background: rgba(64, 184, 131, 0.1);
}

h1 {
  position: relative;
  padding-left: 25px;
  text-align: center;
}

h1:before {
  position: absolute;
  content: "";
  bottom: -3px;
  left: 0;
  width: 0;
  height: 0;
  border: none;
  border-left: solid 15px transparent;
  border-bottom: solid 15px rgb(119, 195, 223);
}
h1:after {
  position: absolute;
  content: "";
  bottom: -3px;
  left: 10px;
  width: 100%;
  border-bottom: solid 3px rgb(119, 195, 223);
}

.card_container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 0 10%;
}

.card {
  margin: 30px auto;
  width: 350px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 5px #ccc;
}
.card-img {
  border-radius: 5px 5px 0 0;
  max-width: 100%;
  height: auto;
}
.card-content {
  padding: 20px;
}
.card-title {
  font-size: 20px;
  margin-bottom: 20px;
  text-align: center;
  color: #333;
}
.card-text {
  color: #777;
  font-size: 14px;
  line-height: 1.5;
}
.card-link {
  text-align: center;
  border-top: 1px solid #eee;
  padding: 20px;
}
.card-link a {
  text-decoration: none;
  color: #0bd;
  margin: 0 10px;
}
.card-link a:hover {
  color: #0090aa;
  cursor: pointer;
}

.modal-header,
.modal-body {
  padding: 5px 25px;
}
.modal-header {
  border-bottom: 1px solid #ddd;
}
</style>
