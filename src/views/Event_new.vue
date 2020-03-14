<template>
  <div id="event">
    <div class="form_content">
      <section class="section">
        <div class="text-input">
          <input
            v-model="title"
            type="text"
            id="input1"
            placeholder="  ex)フットサル"
          />
          <label for="input1">タイトル</label>
        </div>
      </section>

      <section class="section">
        <p>対象コース</p>

        <div class="select_course">
          <label
            ><input
              type="checkbox"
              :checked="isAllTargetCourse"
              @click="selectAllTargetcourse"
            />全てのコースを選択</label
          >
          <div v-for="(target_course, index) in target_course" :key="index">
            <input
              type="checkbox"
              :value="target_course"
              v-model="selected_target_course"
              multiple
            />
            {{ target_course }}
          </div>
        </div>
      </section>

      <section class="section">
        <p class="title">対象期</p>

        <div class="select_term">
          <label
            ><input
              type="checkbox"
              :checked="isAllTargetTerm"
              @click="selectAllTargetTerm"
            />全ての期を選択</label
          >
          <div v-for="(target_term, index) in target_term" :key="index">
            <input
              type="checkbox"
              :value="target_term"
              v-model="selected_target_term"
              multiple
            />
            {{ target_term }}
          </div>
        </div>
      </section>

      <section class="section">
        <p>開催日</p>

        <div id="datepicker">
          <v-date-picker
            :input-props="{
              class: 'input',
              name: 'event_dates',
              placeholder: '日付を選択',
            }"
            :mode="mode"
            :formats="formats"
            v-model="selectedDate"
          ></v-date-picker>
        </div>
      </section>

      <section class="section">
        <div class="description_input">
          <span class="item-name">イベント詳細</span>
          <textarea
            v-model="description"
            type="text"
            placeholder="ex)ついに15期GSDCです！みんなの３ヶ月の集大成！ここで結果を出そうぜええええ"
            name="description"
            rows="8"
            cols="80"
          ></textarea>
        </div>
      </section>

      <button class="btn-square section" @click="send">この内容で送信</button>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import router from "@/router";
import { db } from "@/firebase";

import VCalendar from "v-calendar";

Vue.use(VCalendar);

export default {
  el: "#datepicker",
  data() {
    return {
      title: "",
      description: "",
      target_course: ["web", "game", "iphone", "webex"],
      target_term: [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
        "21",
        "22",
        "23",
        "24",
        "25",
        "26",
        "27",
      ],
      isAllTargetCourse: false,
      isAllTargetTerm: false,
      selected_target_course: [],
      selected_target_term: [],
      mode: "single",
      formats: {
        input: ["YYYY-MM-DD"],
      },
      selectedDate: null,
    };
  },
  methods: {
    selectAllTargetcourse() {
      if (this.isAllTargetCourse) {
        this.selected_target_course = [];
        this.isAllTargetCourse = false;
      } else {
        this.selected_target_course = [];
        for (var target_course in this.target_course) {
          this.selected_target_course.push(this.target_course[target_course]);
        }
        this.isAllTargetCourse = true;
      }
    },
    selectAllTargetTerm() {
      if (this.isAllTargetTerm) {
        this.selected_target_term = [];
        this.isAllTargetTerm = false;
      } else {
        this.selected_target_term = [];
        for (var target_term in this.target_term) {
          this.selected_target_term.push(this.target_term[target_term]);
        }
        this.isAllTargetTerm = true;
      }
    },
    send() {
      //firebaseにイベント内容をadd
      const params = {
        title: this.title,
        description: this.description,
        target_course: this.selected_target_course,
        target_term: this.selected_target_term,
        date: this.selectedDate,
      };
      db.collection("event").add(params);
      router.push("/events");
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

.section {
  margin-top: 60px;
}
.form_content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 60%;
}

.text-input {
  position: relative;
  margin-top: 50px;

  input[type="text"] {
    display: inline-block;
    width: 500px;
    height: 40px;
    box-sizing: border-box;
    outline: none;
    border: 1px solid lightgray;
    border-radius: 3px;
    padding: 10px 10px 10px 100px;
    transition: all 0.1s ease-out;
  }

  input[type="text"] + label {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    height: 40px;
    line-height: 40px;
    color: white;
    border-radius: 3px 0 0 3px;
    padding: 0 20px;
    background: #e03616;
    transform: translateZ(0) translateX(0);
    transition: all 0.3s ease-in;
    transition-delay: 0.2s;
  }

  input[type="text"]:focus + label {
    transform: translateY(-120%) translateX(0%);
    border-radius: 3px;
    transition: all 0.1s ease-out;
  }

  input[type="text"]:focus {
    padding: 10px;
    transition: all 0.3s ease-out;
    transition-delay: 0.2s;
  }
}

.select_course {
  display: flex;
}

.select_term {
  display: flex;
  flex-wrap: wrap;
}

textarea {
  width: 100%;
  height: 300px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}

.btn-square {
  display: inline-block;
  padding: 0.5em 1em;
  text-decoration: none;
  background: #668ad8; /*ボタン色*/
  color: #fff;
  border-bottom: solid 4px #627295;
  border-radius: 3px;
}
.btn-square:active {
  /*ボタンを押したとき*/
  -webkit-transform: translateY(4px);
  transform: translateY(4px); /*下に動く*/
  border-bottom: none; /*線を消す*/
}
</style>
