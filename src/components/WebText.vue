<template>
  <div id="web-text">
    <div id="page-title" class="ppt ">{{ page_title }}</div>
    <div id="text" v-html="Md"></div>
    <img src="@/assets/not_found.png" v-show="not_found" />
  </div>
</template>

<script>
import error404 from "@/assets/markdowns/NotFound.md";
import web11 from "@/assets/markdowns/web/1-1/1-1.md";
import web12 from "@/assets/markdowns/web/1-2/1-2.md";
import web13 from "@/assets/markdowns/web/1-3/1-3.md";
import web14 from "@/assets/markdowns/web/1-4/1-4.md";
import web21 from "@/assets/markdowns/web/2-1/2-1.md";
import web22 from "@/assets/markdowns/web/2-2/2-2.md";
import web23 from "@/assets/markdowns/web/2-3/2-3.md";
import web24 from "@/assets/markdowns/web/2-4/2-4.md";
import web31 from "@/assets/markdowns/web/3-1/3-1.md";
import web32 from "@/assets/markdowns/web/3-2/3-2.md";
export default {
  props: {
    folder: String,
    title: String,
  },
  created() {
    let which_md = this.folder + "/" + this.title;
    this.whichtext(which_md);
  },
  data() {
    return {
      page_title: this.title,
      error404: error404,
      not_found: false,
      web11: web11,
      web12: web12,
      web13: web13,
      web14: web14,
      web21: web21,
      web22: web22,
      web23: web23,
      web24: web24,
      web31: web31,
      web32: web32,
    };
  },
  methods: {
    whichtext: function(which_md) {
      switch (which_md) {
        case "web/1-1. 3ヶ月の流れ":
          this.page_title = this.title;
          this.Md = this.web11;
          break;

        case "web/1-2. DemoDayについて":
          this.Md = this.web12;
          break;
        case "web/1-3. GSDCについて":
          this.Md = this.web13;
          break;
        case "web/1-4. Webコース学習の流れ":
          this.Md = this.web14;
          break;

        case "web/2-1. HTML/CSSの概要":
          this.Md = this.web21;
          break;

        case "web/2-2. HTMLの基本":
          this.Md = this.web22;
          break;

        case "web/2-3. CSSの基本":
          this.Md = this.web23;
          break;
        case "web/2-4. ホームページの大枠を作ろう！":
          this.Md = this.web24;
          break;
        case "web/3-1.ターミナル(コマンドプロンプト)の使い方":
          this.Md = this.web31;
          break;
        case "web/3-2.Ruby on Railsとは":
          this.Md = this.web32;
          break;
        default:
          this.page_title = null;
          this.not_found = true;
          this.Md = this.error404;
          break;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@media screen and (min-width: 1024px) {
  #web-text {
    width: 100%;
    .ppt {
      position: relative;
      padding: 2px 48px;
      border-bottom: 1px solid #62a1cb;
      font-weight: lighter;
    }
    .ppt:first-letter {
      color: #62a1cb;
    }
    .ppt:before,
    .ppt:after {
      content: "";
      display: block;
      position: absolute;
    }
    .ppt:before {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      border: 1px solid #ddd;
      bottom: -16px;
      left: 8px;
    }
    .ppt:after {
      height: 64px;
      border-left: 1px solid #ddd;
      bottom: -32px;
      left: 24px;
    }
    #page-title {
      font-size: 2.3rem;
      padding-top: 30px;
    }
    #text {
      padding-left: 40px;
      padding-top: 30px;
    }
  }
}
@media screen and (min-width: 700px) and (max-width: 1024px) {
  #web-text {
    width: 100%;
    .ppt {
      position: relative;
      padding: 2px 48px;
      border-bottom: 1px solid #62a1cb;
      font-weight: lighter;
      width: 80%;
    }
    .ppt:first-letter {
      color: #62a1cb;
    }
    .ppt:before,
    .ppt:after {
      content: "";
      display: block;
      position: absolute;
    }
    .ppt:before {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      border: 1px solid #ddd;
      bottom: -16px;
      left: 8px;
    }
    .ppt:after {
      height: 64px;
      border-left: 1px solid #ddd;
      bottom: -32px;
      left: 24px;
    }
    #page-title {
      font-size: 2rem;
      padding-top: 30px;
    }
    #text {
      padding-left: 40px;
      padding-top: 30px;
    }
  }
}
@media screen and (min-width: 350px) and (max-width: 700px) {
  #web-text {
    width: 100%;
    #page-title {
      font-size: 1.8rem;
      width: 90%;
      padding-top: 30px;
      margin-left: 10px;
      border-bottom: 1px solid #62a1cb;
    }
    #text {
      padding: 30px 10px 30px 10px;
    }
  }
}
</style>
