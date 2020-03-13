<template>
  <div id="product-post">
    <div id="product-post-container">
      <h1>Add Your Product</h1>
      <span id="close" @click="close()">×</span>
      <div id="product-post-right-left-container">
        <div id="product-post-container-left">
          <div id="image-box">
            <img
              id="image"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
            />
          </div>
          <label class="upload-img-btn">
            画像を変更する
            <input
              type="file"
              style="display:none"
              id="file_upload"
              @change="selectedFile($event)"
            />
          </label>
        </div>
        <div id="product-post-container-right">
          <div id="title-container">
            <input
              type="text"
              v-model="product_name"
              placeholder="作品名を入力"
            />
          </div>

          <div id="product-post-maker">
            <input
              type="text"
              v-model="developer"
              placeholder="開発者名・チーム名を入力"
            />
          </div>
          <div id="product-post-lang">
            <div id="lang-title">
              使用言語・フレームワーク
            </div>
            <div id="checkbox-wrapper">
              <div
                v-for="(tag, index) in tags"
                :key="tag.id"
                class="check-container"
              >
                <input
                  type="checkbox"
                  :id="'tag' + index"
                  @click="addLang(tag)"
                />
                <label :for="'tag' + index"></label>
                <span class="tag">{{ tag }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="product-info-container">
        <textarea v-model="text" placeholder="紹介文を入力"></textarea>
      </div>

      <div id="send_button_container">
        <button @click="post()">確認</button>
      </div>
    </div>
    <transition name="fade">
      <div id="confirm-box" v-show="confirm_show">
        <ProductShow
          :show.sync="confirm_show"
          :post="true"
          :which_product="which_product"
        >
          <template v-slot:theme>
            <h1 style="text-align:center;">Confirm</h1>
          </template>
        </ProductShow>
      </div>
    </transition>
  </div>
</template>
<script>
// import { db } from "@/firebase";
import ProductShow from "@/components/ProductShow.vue";
export default {
  props: {
    post_show: Boolean,
  },
  components: {
    ProductShow,
  },
  watch: {
    confirm_show: function(val) {
      if (val == true) {
        document.getElementById("new-post-cotnainer").style.backgroundColor =
          "transparent";
        document.getElementById("confirm-box").style.paddingBottom = 100 + "px";
      } else {
        document.getElementById("new-post-cotnainer").style.backgroundColor =
          "rgba(0, 0, 0, 0.4)";
        document.getElementById("confirm-box").style.paddingBottom = 0;
      }
    },
  },
  data() {
    return {
      show: this.post_show,
      confirm_show: false,
      product_name: "",
      developer: "",
      langages: [],
      text: "",
      url: null,
      which_product: {
        image: null,
        name: null,
        maker: null,
        langages: null,
        info: null,
      },
      tags: [
        "HTML5",
        "CSS3",
        "Ruby",
        "JavaScript",
        "C#",
        "Swift",
        "Google Apps Script",
        "Ruby on Rails",
        "Vue.js",
        "React.js",
        "Unity",
        "Firebase",
        "その他",
      ],
    };
  },

  methods: {
    close: function() {
      this.menu_show = false;
      this.$emit("update:post_show", this.show);
    },
    addLang: function(name) {
      if (this.langages.length == 0) {
        this.langages.push(name);
      } else {
        let num = this.langages.length;
        for (let i = 0; i < this.langages.length; i++) {
          if (this.langages[i] == name) {
            this.langages.splice(i, 1);
            break;
          }
        }
        if (this.langages.length == num) {
          this.langages.push(name);
        }
      }
    },
    selectedFile: function(event) {
      var file = event.target.files[0];
      let fileReader = new FileReader();
      // 読み込み完了時の処理を追加
      fileReader.onload = function() {
        const url = this.result;

        // img要素に表示
        var img = document.getElementById("image");
        img.src = url;
      };
      fileReader.readAsDataURL(file);
    },
    post: function() {
      let product = {
        image: this.url,
        name: this.product_name,
        maker: this.developer,
        langages: this.langages,
        info: this.text,
      };
      this.which_product = product;
      console.log(this.which_product);
      document.getElementById("confirm-box").style.height =
        document.getElementById("products").scrollHeight + "px";
      document.getElementById("new-post-cotnainer").style.backgroundColor =
        "transparent";
      document.getElementById("confirm-box").style.paddingBottom = 100 + "px";
      this.confirm_show = true;
      // db.collection("products").add({
      //   name: this.product_name,
      //  maker: this.developer,
      // langages: this.langages,
      //  info: this.text,
      //  });
    },
  },
};
</script>

<style lang="scss" scoped>
@media screen and (min-width: 1024px) {
  #product-post {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;

    #product-post-container {
      width: 80%;
      h1 {
        text-align: center;
      }
      background-color: rgba(255, 255, 255, 1);
      padding: 40px;
      margin-top: 70px;

      border-radius: 20px;
      max-height: 1000px;

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
      #product-post-right-left-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 100%;
        #product-post-container-left {
          width: 40%;
          height: auto;
          margin-right: 40px;
          padding-top: 40px;
          display: flex;
          flex-direction: column;
          align-items: center;
          #image-box {
            width: 100%;
            height: 300px;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            border: 1px solid rgba(0, 0, 0, 0.2);
            img {
              max-width: 100%;
              max-height: 300px;
            }
          }
          .upload-img-btn {
            margin: 60px auto 0 auto;
            padding: 15px;
            border-radius: 4px;
            max-width: 120px;
            text-align: center;
            display: block;
            background-color: #f1f1f1;
            color: #73a9ff;
            box-shadow: 0 2px 6px rgba(146, 146, 146, 0.8);
            cursor: pointer;
          }
        }
        #product-post-container-right {
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
            input[type="text"] {
              display: block;
              width: 100%;
              padding: 5px 10px;
              font-size: 1.5rem;
            }
          }
          #product-post-lang {
            width: 100%;

            input[type="checkbox"] {
              display: none;
            }
            #checkbox-wrapper {
              display: flex;
              flex-direction: column;
              justify-content: flex-start;
              flex-wrap: wrap;
              width: 100%;
              height: 300px;
              .check-container {
                display: inline-block;
                position: relative;
                margin-bottom: 20px;
              }
              input[type="checkbox"] + label {
                z-index: 15;
                position: absolute;
                left: 0px;
                top: -1px;
                bottom: 10px;
                right: 10px;
                -webkit-transition: all 0.3s ease;
                transition: all 0.3s ease;
                cursor: pointer;
                width: 20px;
                border: 4px solid #444;
                height: 20px;
              }
              .tag {
                margin-left: 40px;
              }
              input[type="checkbox"]:checked + label {
                -webkit-transition: all 0.3s ease;

                transition: all 0.3s ease;
                display: inline-block;
                width: 20px;
                height: 20px;
                border-top-color: transparent;
                border-right-color: transparent;
                border-bottom-color: #2ecc71;
                border-left-color: transparent;
                transform: rotate(-50deg) translate(5px, -9px);
              }

              input[type="checkbox"]:checked + label:before {
                content: "";
                position: absolute;
                right: 0;
                bottom: -3px;
                height: 15px;
                width: 100%; /* or 100px */
                border-left: 4px solid #2ecc71;
              }
            }
            #lang-title {
              font-size: 1.2rem;
              margin: 20px 0;
            }
          }
          #product-post-maker {
            width: 100%;
            display: flex;
            flex-direction: row;

            input[type="text"] {
              width: 100%;
              margin-top: 30px;
              padding: 5px 10px;
              font-size: 1.4rem;
            }
          }
        }
      }

      #product-info-container {
        width: 80%;
        padding: 10px;
        margin: 60px auto 0 auto;
        font-size: 1.3rem;
        line-height: 40px;
        textarea {
          width: 100%;
          min-height: 200px;
          max-height: 300px;
          font-size: 1.3rem;
          padding: 10px;
        }
      }
    }
    #send_button_container {
      width: 80%;
      margin: 0 auto;
      padding-top: 20px;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      button {
        padding: 5px 20px;
        background: rgba(64, 184, 131, 0.5);
        border: none;
        font-size: 1.3rem;
        border-radius: 10px;
        cursor: pointer;
      }
    }
    #confirm-box {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;

      z-index: 20;
      background: rgba(0, 0, 0, 0.3);
    }
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
}
@media screen and (min-width: 700px) and (max-width: 1024px) {
  #product-post {
    display: none;
  }
}
@media screen and (min-width: 350px) and (max-width: 700px) {
  #product-post {
    display: none;
  }
}
</style>
