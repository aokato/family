<template>
  <div id="show">
    <div id="show-container">
      <WebText :folder="folder" :title="title"></WebText>
    </div>
  </div>
</template>

<script>
import WebText from "@/components/WebText.vue";
import hljs from "highlightjs";
export default {
  components: {
    WebText,
  },
  data() {
    return {
      folder: this.$route.params.course,
      title: this.$route.params.title,
    };
  },
  beforeCreate() {
    document.scrollingElement.scrollTop = 0;
  },
  mounted() {
    // code要素にファイル名などを付与する
    var codes = document.querySelectorAll("code");
    if (codes) {
      Array.prototype.slice.call(codes).forEach(function(item) {
        // クラスを取得
        var classes = item.classList;
        if (classes.length > 0) {
          // ファイル名があればdata属性にセット
          if (classes[0].indexOf(":")) {
            var values = classes[0].split(":");
            var filename = values[1];
            if (filename) item.setAttribute("data-filename", filename);
            // ファイル名を削除して言語クラスに変更する
            item.classList.remove(classes[0]);
            item.classList.add(values[0]);
          }
        }
      });
    }
    document.querySelectorAll("pre code").forEach(block => {
      hljs.highlightBlock(block);
    });
  },
};
</script>
<style lang="scss" scoped>
@media screen and (min-width: 1024px) {
  #show {
    width: 100%;
    padding-top: 100px;
    padding-bottom: 100px;
    min-height: 100vh;
    background: rgba(64, 184, 131, 0.1);
    display: flex;
    flex-direction: row;
    justify-content: center;
    #show-container {
      width: 70%;
      background-color: white;
      padding: 30px;
    }
  }
}
@media screen and (min-width: 700px) and (max-width: 1024px) {
  #show {
    width: 100%;
    margin-top: 60px;
    min-height: 100vh;
    background: rgba(64, 184, 131, 0.1);
    display: flex;
    flex-direction: row;
    justify-content: center;

    #show-container {
      width: 95%;
      background-color: white;
      padding: 30px 0 30px 0;
    }
  }
}
@media screen and (min-width: 350px) and (max-width: 700px) {
  #show {
    width: 100%;
    margin-top: 60px;
    min-height: 100vh;
    background: rgba(64, 184, 131, 0.1);
    display: flex;
    flex-direction: row;
    justify-content: center;

    #show-container {
      width: 100%;
      background-color: white;
      padding: 30px 0px 30px 0;
    }
  }
}
</style>
