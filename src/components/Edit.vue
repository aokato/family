<template>
  <div id="edit">
    <input type="text" v-model="title" placeholder="タイトルを入力" />
    <mavon-editor v-model="value" language="en" :toolbars="toolbars" />
    <div id="edit-button-container">
      <button type="button" @click="gethtml()">保存</button>
    </div>
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
    input[type="text"] {
      display: inline-block;
      margin-left: 30px;
      margin-bottom: 30px;
      padding: 5px 10px;
      border: 1px solid black;
      width: 400px;
      background: white;
    }
    #edit-button-container {
      width: 80%;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      margin: 30px auto;
      button {
        padding: 10px 20px;
        background: white;
        border: 1px solid black;
      }
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
