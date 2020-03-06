<template>
  <div id="edit">
    <slot name="new-or-edit"></slot>
    <input type="text" v-model="title" placeholder="タイトルを入力" />
    <mavon-editor
      v-show="!dialog"
      v-model="value"
      language="ja"
      :toolbars="toolbars"
    />
    <div id="edit-button-container">
      <button type="button" v-show="!dialog" @click="dialog = true">
        保存
      </button>
    </div>

    <transition name="fade">
      <div id="dialog" v-show="dialog">
        <div id="alert-box">
          <div id="alert-message">本当に保存してもよろしいですか？？</div>
          <div id="yes-no-container">
            <button type="button" @click="dialog = false">いいえ</button>
            <button type="button" @click="gethtml()">はい</button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Vue from "vue";
import mavonEditor from "mavon-editor";
import "mavon-editor/dist/css/index.css";
import axios from "axios";
Vue.use(mavonEditor);

export default {
  data() {
    return {
      value: "",
      title: null,
      dialog: false,
      toolbars: {
        bold: true,
        italic: true,
        header: true,
        underline: true,
        strikethrough: true,
        mark: true,
        superscript: true,
        subscript: true,
        quote: true,
        ol: true,
        ul: true,
        link: true,
        imagelink: true,
        code: true,
        table: true,
        help: true,
        alignleft: true,
        aligncenter: true,
        alignright: true,
        subfield: true,
        preview: true,
        // false
        undo: false,
        redo: false,
        fullscreen: false,
        readmodel: false,
        htmlcode: false,
        trash: false,
        save: false,
        navigation: false,
      },
    };
  },
  methods: {
    gethtml: function() {
      let html = document.getElementsByClassName("v-show-content")[0].innerHTML;

      axios
        .post("https://family-rails-api.herokuapp.com/api/v1/web/create.json", {
          text: html,
          title: this.title,
        })
        .then(function() {
          location.reload();
        })
        .catch(function(error) {
          console.log(error);
        });
    },
  },
};
</script>
<style lang="scss" scoped>
@media screen and (min-width: 1024px) {
  #edit {
    width: 100%;
    padding: 40px;
    background: rgba(0, 0, 0, 0.7);
    input[type="text"] {
      display: inline-block;
      margin-left: 30px;
      margin-bottom: 30px;
      padding: 5px 10px;
      border: 1px solid black;
      width: 400px;
    }
    #edit-button-container {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      margin: 30px auto;
      button {
        padding: 10px 20px;
        background: white;
        border: 1px solid black;
        border-radius: 10px;
      }
    }
    #dialog {
      position: absolute;
      width: 100%;
      top: 0;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      z-index: 20;

      #alert-box {
        width: 600px;
        height: 300px;
        background: white;
        padding-top: 50px;
        #alert-message {
          text-align: center;
          font-size: 1.5rem;
          margin-bottom: 40px;
        }
        #yes-no-container {
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          width: 100%;
          button {
            font-size: 1.3rem;
            padding: 5px 10px;
            border: 1px solid black;
            background: white;
          }
        }
      }
    }
    .fade-enter-active,
    .fade-leave-active {
      will-change: opacity;
      transition: opacity 500ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    }
    .fade-enter,
    .fade-leave-to {
      opacity: 0;
    }
  }
  @media screen and (min-width: 700px) and (max-width: 1024px) {
    #edit {
    }
  }
  @media screen and (min-width: 350px) and (max-width: 700px) {
    #edit {
    }
  }
}
</style>
