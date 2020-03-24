<template>
  <div id="product-show">
    <div id="product-show-container">
      <slot name="theme"></slot>
      <span id="close" @click="close()">×</span>
      <div id="product-show-right-left-container">
        <div id="product-show-container-left">
          <div class="image-container" v-if="post == false">
            <img id="image1" :src="which_product.downloadURL" />
          </div>
          <div class="image-container" v-else>
            <img id="image2" src="" />
          </div>
        </div>

        <div id="product-show-container-right">
          <div id="title-container">
            <span>{{ which_product.name }}</span>
          </div>
          <div id="product-show-maker">
            <div id="course-container">
              <span :id="which_product.course + '-box'">{{
                which_product.course
              }}</span>
            </div>

            <span id="maker-title">developer：</span>
            <span>{{ which_product.maker }}</span>
            <div id="product-url" v-show="post == true">
              <span>URL：</span
              ><a :href="which_product.product_url">{{
                which_product.product_url
              }}</a>
            </div>
          </div>

          <slot name="link_button"></slot>

          <div id="product-show-lang">
            <div id="lang-title">
              使用言語・フレームワーク
            </div>
            <span v-for="langage in which_product.langages" :key="langage.id">
              {{ langage }}</span
            >
          </div>
        </div>
      </div>

      <div
        id="product-info-box"
        :class="{ pulldown: down, noPulldown: !down }"
        v-text="which_product.info"
      ></div>

      <div id="more">
        <span @click="more()">{{ more_msg }}</span>
      </div>

      <slot name="post"></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    which_product: Object,
    show: Boolean,
    post: Boolean,
    submit: Function,
  },
  data() {
    return {
      menu_show: this.show,
      down: false,
      more_msg: "more...",
      imageSRC: null,
    };
  },
  watch: {
    show: function(val) {
      // let image2 = document.getElementById("image2")
      let image1 = document.getElementById("image1");
      if (val === true) {
        let image = document.getElementById("image");
        let this_image = document.getElementById("image2");
        this_image.src = image.src;
        if (image1.naturalWidth % image1.naturalHeight == 0) {
          image1.style.height = 250 + "px";
          image1.style.width = "auto";
        } else {
          image1.style.height = 80 + "%";
        }
        //let text = document.getElementById("product-info-box");
        //let message = document.getElementById("pro-message");
        //     alert("aaa");
      }
    },
    /*post: function(val) {
      let image1 = document.getElementById("image1");
      let image2 = document.getElementById("image2");
      console.dir(image1);
      if (val === true) {
        image2.src = image1.src;
        if (image1.naturalWidth % image1.naturalHeight == 0) {
          image1.style.height = 250 + "px";
          image1.style.width = "auto";
        } else {
          image2.style.height = 80 + "%";
        }
        //let text = document.getElementById("product-info-box");
        //let message = document.getElementById("pro-message");
        //     alert("aaa");
      }
    },*/
  },

  methods: {
    close: function() {
      this.down = false;
      this.menu_show = false;
      this.$emit("update:show", this.menu_show);
    },
    test: function() {
      document.getElementById("image2").src = document.getElementById(
        "image"
      ).src;
    },
    more: function() {
      if (this.more_msg == "more...") {
        this.down = true;
        //text.style.backgroundColor = "red";
        this.more_msg = "close";
      } else if (this.more_msg == "close") {
        this.down = false;
        let text_box = document.getElementById("product-info-box");
        text_box.style.height = 50 + "px";
        this.more_msg = "more...";
      }
    },
  },
  filters: {
    img: function(value) {
      var file = value;
      console.dir(file);
      /* let fileReader = new FileReader();
      // 読み込み完了時の処理を追加
      fileReader.onload = function() {
        const url = this.result;
        // img要素に表示
        var img = document.getElementById("image");
        img.src = url;
        this.url = file;
      };
      fileReader.readAsDataURL(file);*/
    },
  },
};
</script>
<style lang="scss" scoped>
@media screen and (min-width: 1024px) {
  #product-show {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;

    #product-show-container {
      width: 80%;
      min-width: 1000px;
      background-color: rgba(255, 255, 255, 1);
      padding: 40px;
      margin-top: 70px;
      margin-bottom: 70px;
      border-radius: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      #close {
        position: absolute;
        top: -50px;
        right: -50px;
        color: white;
        border: none;
        border-radius: 50%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        display: inline-block;
        font-size: 60px;
        font-weight: bold;
      }
      #close:hover {
        cursor: pointer;
      }
      #product-show-right-left-container {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        #product-show-container-left {
          width: 40%;
          height: auto;
          margin-right: 40px;
          margin-left: 40px;
          padding-top: 80px;

          display: flex;
          flex-direction: row;
          justify-content: center;
          .image-container {
            display: flex;
            flex-direction: row;
            justify-content: center;
            width: 100%;

            img {
              display: inline-block;
              width: 500px;
              height: 250px;
            }
          }
        }
        #product-show-container-right {
          width: 50%;
          #title-container {
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            margin-top: 30px;

            span {
              display: inline-block;
              font-size: 2.5rem;
              border-bottom: 2px dashed rgba(64, 184, 131, 0.5);
              padding-bottom: 10px;
            }
          }

          #product-show-lang {
            #lang-title {
              font-size: 1.2rem;
              margin: 20px 0;
            }
            span {
              display: inline-block;
              padding: 5px 10px;
              background: rgba(0, 0, 0, 0.1);
              font-size: 0.8rem;
              margin-right: 8px;
              margin-bottom: 8px;
              border-radius: 5px;
            }
          }
          #product-show-maker {
            #maker-title {
              font-size: 1.2rem;
            }

            #course-container {
              margin-top: 20px;
              margin-bottom: 20px;
              #link_button {
              }
              span {
                display: inline-block;
                padding: 5px 15px;
                border: none;
                cursor: pointer;

                border-radius: 10px;
                font-size: 1.2rem;
              }
              #web-box {
                background: rgba(255, 61, 85);
                color: white;
              }
              #game-box {
                background: #4a78ff;
                color: white;
              }
              #ios-box {
                background: #ff8546;
                color: white;
              }
              #webex-box {
                background: #e4c308;
                color: white;
              }
              #other-box {
                background: #40b883;
                color: white;
              }
            }
            span {
              display: inline-block;
              font-size: 1rem;
            }
            #product-url {
              margin-top: 30px;
            }
          }
        }
      }

      #product-info-box {
        width: 80%;
        padding: 10px;
        margin: 60px auto 0 auto;
        font-size: 1.3rem;
        line-height: 40px;
      }
      #more {
        display: none;
      }
    }
  }
}
@media screen and (min-width: 700px) and (max-width: 1024px) {
  #product-show {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;

    #product-show-container {
      width: 95%;
      background-color: rgba(255, 255, 255, 1);
      padding: 40px;
      margin-top: 70px;
      margin-bottom: 70px;
      border-radius: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      box-sizing: border-box;
      #close {
        position: absolute;
        top: -10px;
        right: 10px;
        color: black;
        border: none;
        border-radius: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        align-items: center;
        display: inline-block;
        font-size: 60px;
        font-weight: bold;
      }
      #close:hover {
        cursor: pointer;
      }
      #product-show-right-left-container {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        #product-show-container-left {
          width: 100%;
          height: auto;
          padding-top: 40px;
          display: flex;
          flex-direction: column;

          .image-container {
            display: flex;
            flex-direction: row;
            justify-content: center;
            width: 100%;

            img {
              width: 100%;
              height: auto;
            }
          }
        }
        #product-show-container-right {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          #title-container {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 30px;

            span {
              display: inline-block;
              font-size: 2rem;
              border-bottom: 2px dashed rgba(64, 184, 131, 0.5);
              padding-bottom: 10px;
            }
          }
          #course-container {
            span {
              display: inline-block;
              padding: 5px 15px;
              border: none;
              cursor: pointer;
              margin-right: 20px;
              border-radius: 10px;
              font-size: 1.2rem;
            }
            #web-box {
              background: rgba(255, 61, 85);
            }
            #game-box {
              background: #4a78ff;
            }
            #ios-box {
              background: #ff8546;
            }
            #webex-box {
              background: #e4c308;
            }
            #other-box {
              background: #40b883;
            }
          }

          #product-show-lang {
            display: flex;
            flex-direction: row;
            align-items: center;
            flex-wrap: wrap;
            #lang-title {
              font-size: 1.2rem;
              margin: 20px 0;
              display: block;
              width: 100%;
            }
            span {
              display: inline-block;
              padding: 5px 10px;
              background: rgba(0, 0, 0, 0.1);
              font-size: 0.8rem;
              margin-right: 8px;
              margin-bottom: 8px;
              border-radius: 5px;
            }
          }
          #product-show-maker {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            #maker-title {
              font-size: 1.2rem;
              margin: 20px 0;
            }
          }
        }
      }
      .top-enter-active,
      .top-leave-active {
        transform: translate(0px, 0px);
        transition: transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;
      }

      .top-enter,
      .top-leave-to {
        transform: translateY(-100vh) translateY(0px);
      }
      #product-info-box {
        width: 80%;
        padding: 10px;
        margin: 30px auto 0 auto;
        font-size: 1rem;

        overflow: hidden;
      }
      .noPulldown {
        height: 30px;
      }
      .pulldown {
        height: auto;
      }
      #more {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        font-size: 1rem;
        padding-right: 30px;
      }
    }
  }
}
@media screen and (min-width: 350px) and (max-width: 700px) {
  #product-show {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;

    #product-show-container {
      width: 95%;
      background-color: rgba(255, 255, 255, 1);
      padding: 40px;
      margin-top: 70px;
      margin-bottom: 70px;
      border-radius: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      box-sizing: border-box;
      #close {
        position: absolute;
        top: -10px;
        right: 10px;
        color: black;
        border: none;
        border-radius: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        align-items: center;
        display: inline-block;
        font-size: 60px;
        font-weight: bold;
      }
      #close:hover {
        cursor: pointer;
      }
      #product-show-right-left-container {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        #product-show-container-left {
          width: 100%;
          height: auto;
          padding-top: 40px;
          display: flex;
          flex-direction: column;

          .image-container {
            display: flex;
            flex-direction: row;
            justify-content: center;
            width: 100%;

            img {
              width: 100%;
              height: auto;
            }
          }
        }
        #product-show-container-right {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          #title-container {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 30px;

            span {
              display: inline-block;
              font-size: 1.3rem;
              border-bottom: 2px dashed rgba(64, 184, 131, 0.5);
              padding-bottom: 10px;
            }
          }
          #course-container {
            margin-top: 20px;
            span {
              display: inline-block;
              padding: 5px 15px;
              border: none;
              cursor: pointer;
              margin-right: 20px;
              border-radius: 10px;
              font-size: 1.2rem;
            }
            #web-box {
              background: rgba(255, 61, 85);
            }
            #game-box {
              background: #4a78ff;
            }
            #ios-box {
              background: #ff8546;
            }
            #webex-box {
              background: #e4c308;
            }
            #other-box {
              background: #40b883;
            }
          }

          #product-show-lang {
            display: flex;
            flex-direction: row;
            align-items: center;
            flex-wrap: wrap;
            #lang-title {
              font-size: 1.2rem;
              margin: 20px 0;
              display: block;
              width: 100%;
            }
            span {
              display: inline-block;
              padding: 5px 10px;
              background: rgba(0, 0, 0, 0.1);
              font-size: 0.8rem;
              margin-right: 8px;
              margin-bottom: 8px;
              border-radius: 5px;
            }
          }
          #product-show-maker {
            #maker-title {
              font-size: 1.2rem;
              margin: 20px 0;
            }
            span {
              display: inline-block;

              font-size: 1rem;
            }
          }
        }
      }
      .top-enter-active,
      .top-leave-active {
        transform: translate(0px, 0px);
        transition: transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;
      }

      .top-enter,
      .top-leave-to {
        transform: translateY(-100vh) translateY(0px);
      }
      #product-info-box {
        width: 80%;
        padding: 10px;
        margin: 30px auto 0 auto;
        font-size: 1rem;

        overflow: hidden;
      }
      .noPulldown {
        height: 30px;
      }
      .pulldown {
        height: auto;
      }
      #more {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        font-size: 1rem;
        padding-right: 30px;
      }
    }
  }
}
</style>
