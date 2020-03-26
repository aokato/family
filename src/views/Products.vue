<template>
  <div id="products">
    <h1 id="title">List of Works</h1>

    <div id="new-button-container">
      <button type="button" @click="clicked_post()">
        <span>+</span>Add Your Product
      </button>
    </div>

    <transition name="fade">
      <div id="new-post-cotnainer" v-show="post_show">
        <Post :post_show.sync="post_show"></Post>
      </div>
    </transition>
    <div id="tabMenu-container">
      <div id="tabMenu">
        <div
          id="web-tab"
          v-on:click="change(1)"
          v-bind:class="{ active: active === 1 }"
        >
          Web
        </div>
        <div
          id="game-tab"
          v-on:click="change(2)"
          v-bind:class="{ active: active === 2 }"
        >
          Game
        </div>
        <div
          id="ios-tab"
          v-on:click="change(3)"
          v-bind:class="{ active: active === 3 }"
        >
          iOS
        </div>
        <div
          id="webex-tab"
          v-on:click="change(4)"
          v-bind:class="{ active: active === 4 }"
        >
          WebEx
        </div>
        <div
          id="other-tab"
          v-on:click="change(5)"
          v-bind:class="{ active: active === 5 }"
        >
          Others
        </div>
      </div>
    </div>

    <div id="web-products" class="cards-container" v-if="active === 1">
      <div
        v-for="(product, index) in web_products"
        :key="product.id"
        data-aos="fade-top"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        <div
          :id="'web-product-' + index"
          @click="card_clicked(product, index, 'web')"
        >
          <ProductCard
            :product="product"
            :index="index"
            :course="'web'"
          ></ProductCard>
        </div>
      </div>
    </div>
    <div id="game-products" class="cards-container" v-else-if="active === 2">
      <div
        v-for="(product, index) in game_products"
        :key="product.id"
        data-aos="fade-top"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        <div
          :id="'game-product-' + index"
          @click="card_clicked(product, index, 'game')"
        >
          <ProductCard
            :product="product"
            :index="index"
            :course="'game'"
          ></ProductCard>
        </div>
      </div>
    </div>
    <div id="ios-products" class="cards-container" v-else-if="active === 3">
      <div
        v-for="(product, index) in ios_products"
        :key="product.id"
        data-aos="fade-top"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        <div
          :id="'ios-product-' + index"
          @click="card_clicked(product, index, 'ios')"
        >
          <ProductCard
            :product="product"
            :index="index"
            :course="'ios'"
          ></ProductCard>
        </div>
      </div>
    </div>
    <div id="webex-products" class="cards-container" v-else-if="active === 4">
      <div
        v-for="(product, index) in webex_products"
        :key="product.id"
        data-aos="fade-top"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        <div
          :id="'webex-product-' + index"
          @click="card_clicked(product, index, 'webex')"
        >
          <ProductCard
            :product="product"
            :index="index"
            :course="'webex'"
          ></ProductCard>
        </div>
      </div>
    </div>
    <div id="other-products" class="cards-container" v-else-if="active === 5">
      <div
        v-for="(product, index) in other_products"
        :key="product.id"
        data-aos="fade-top"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        <div
          :id="'other-product-' + index"
          @click="card_clicked(product, index, 'other')"
        >
          <ProductCard
            :product="product"
            :index="index"
            :course="'other'"
          ></ProductCard>
        </div>
      </div>
    </div>
    <transition name="fade">
      <div id="to-product-show" v-show="show">
        <div id="show-component">
          <ProductShow
            :show.sync="show"
            :post="false"
            :which_product="which_product"
          >
            <template v-slot:link_button>
              <a class="link" :href="which_product.url">実物を見る</a>
            </template>
          </ProductShow>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import ProductCard from "@/components/ProductCard.vue";
import ProductShow from "@/components/ProductShow.vue";
import Post from "@/components/PostProduct.vue";
import { db } from "@/firebase";
export default {
  components: {
    ProductCard,
    ProductShow,
    Post,
  },
  watch: {
    post_show: function(val) {
      if (val == true) {
        document.getElementById("products").style.backgroundColor =
          "transparent";
      } else {
        document.getElementById("products").style.backgroundColor =
          "rgba(64, 184, 131, 0.1)";
      }
    },
    show: function(val) {
      if (val == true) {
        document.getElementById("products").style.backgroundColor =
          "transparent";
      } else {
        document.getElementById("products").style.backgroundColor =
          "rgba(64, 184, 131, 0.1)";
      }
    },
  },
  data() {
    return {
      active: 1,
      which_product: {
        name: "",
        url: "",
        downloadURL: "",
        info: "",
        maker: "",
        course: "",
        langages: [],
      },
      show: false,
      post_show: false,
      web_products: [],
      game_products: [],
      ios_products: [],
      webex_product: [],
      other_products: [],
    };
  },
  created() {
    db.collection("products")
      .get()
      .then(snapshot => {
        snapshot.docs.forEach(doc => {
          if (doc.data().product.course == "web") {
            this.web_products.push({
              ...doc.data().product,
            });
          }
          if (doc.data().product.course == "game") {
            this.game_products.push({
              ...doc.data().product,
            });
          }
          if (doc.data().product.course == "ios") {
            this.ios_products.push({
              ...doc.data().product,
            });
          }
          if (doc.data().product.course == "webex") {
            this.webex_products.push({
              ...doc.data().product,
            });
          }
          if (doc.data().product.course == "other") {
            this.other_products.push({
              ...doc.data().products,
            });
          }
        });
      });
  },

  methods: {
    change: function(num) {
      this.active = num;
    },
    card_clicked: function(product, index, langages) {
      // let height = document.getElementById("products").clientHeight;
      //  document.getElementById("products").style.backgroundColor = "transparent";
      let show_component = document.getElementById("show-component");
      let id = null;
      if (langages == "web") {
        id = "web-product-" + index;
      } else if (langages == "game") {
        id = "game-product-" + index;
      } else if (langages == "ios") {
        id = "ios-product-" + index;
      } else if (langages == "webex") {
        id = "webex-product-" + index;
      } else {
        id = "other-product-" + index;
      }

      let element = document.getElementById(id).getBoundingClientRect();
      let to_product_show = document.getElementById("to-product-show");
      let products = document.getElementById("products");
      to_product_show.style.height = products.scrollHeight + 120 + "px";
      let y = window.pageYOffset + element.top - 80;
      show_component.style.top = y + "px";
      this.which_product = product;
      setTimeout(this.image_adjust, 1);
    },

    clicked_post: function() {
      let products = document.getElementById("products");
      let post_container = document.getElementById("new-post-cotnainer");
      let height = products.scrollHeight;
      post_container.style.height = height + "px";
      this.post_show = true;
    },
    image_adjust: function() {
      let show_image = document.getElementById("image1");

      if (show_image.naturalWidth % show_image.naturalHeight == 0) {
        show_image.style.height = 250 + "px";
        show_image.style.width = "auto";
      } else {
        show_image.style.width = 100 + "%";
      }
      // let pro = document.getElementById("product-info-box");
      // pro.textContent = product.info;
      this.show = true;
    },
  },
};
</script>
<style lang="scss" scoped>
@media screen and (min-width: 1024px) {
  #products {
    width: 100%;
    min-height: 100vh;
    padding-top: 100px;
    padding-bottom: 100px;
    background: rgba(64, 184, 131, 0.1);
    #new-post-cotnainer {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      padding-top: 100px;
      z-index: 10;
      background: rgba(0, 0, 0, 0.4);
    }
    #title {
      font-size: 2.5rem;
      font-weight: bold;
      text-align: center;
    }
    #new-button-container {
      width: 70%;
      margin: 0 auto;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      line-height: 1.8rem;
      span {
        display: inline-block;
        margin-right: 20px;
        font-size: 1.8rem;
        font-weight: bold;
      }
      button[type="button"] {
        display: inline-block;
        border: 1px solid rgba(0, 0, 0, 0.1);
        background: white;
        padding: 10px 20px 15px 20px;
        font-size: 1.3rem;
        cursor: pointer;
      }
      button[type="button"]:focus {
        outline: 0;
      }
    }
    #tabMenu-container {
      width: 90%;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      margin: 0 auto;
      #tabMenu {
        padding: 0;
        display: flex;
        list-style-type: none;
        #web-tab {
          width: auto;
          padding: 10px 20px;
          color: black;
          border: 1px solid rgba(255, 61, 85);
          border-bottom: transparent;
          background-color: white;
          cursor: pointer;
          margin-left: 30px;
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
        }
        #web-tab.active {
          color: white;
          background-color: rgba(255, 61, 85);
          transition: 0.3s;
        }
        #game-tab {
          width: auto;
          padding: 10px 20px;
          color: black;
          border: 1px solid #4a78ff;
          border-bottom: transparent;
          background-color: white;
          cursor: pointer;
          margin-left: 30px;
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
        }
        #game-tab.active {
          color: white;
          background-color: #4a78ff;
          transition: 0.3s;
        }
        #ios-tab {
          width: auto;
          padding: 10px 20px;
          color: black;
          border: 1px solid #ff8546;
          border-bottom: transparent;
          background-color: white;
          cursor: pointer;
          margin-left: 30px;
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
        }
        #ios-tab.active {
          color: white;
          background-color: #ff8546;
          transition: 0.3s;
        }
        #webex-tab {
          width: auto;
          padding: 10px 20px;
          color: black;
          border: 1px solid #e4c308;
          border-bottom: transparent;
          background-color: white;
          cursor: pointer;
          margin-left: 30px;
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
        }
        #webex-tab.active {
          color: white;
          background-color: #e4c308;
          transition: 0.3s;
        }
        #other-tab {
          width: auto;
          padding: 10px 20px;
          color: black;
          border: 1px solid #40b883;
          border-bottom: transparent;
          background-color: white;
          cursor: pointer;
          margin-left: 30px;
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
        }
        #other-tab.active {
          color: white;
          background-color: #40b883;
          transition: 0.3s;
        }
      }
    }
    .cards-container {
      display: flex;
      flex-direction: row;
      justify-content: center;
      flex-wrap: wrap;
    }
    #web-products {
      border: 1px solid rgba(255, 61, 85);
      width: 90%;
      min-height: 500px;
      margin: 0px auto;
      background: white;
      box-sizing: border-box;
      padding: 20px;
    }
    #game-products {
      border: 1px solid #4a78ff;
      width: 90%;
      min-height: 500px;
      margin: 0px auto;
      background: white;
      box-sizing: border-box;
      padding: 20px;
    }
    #ios-products {
      border: 1px solid #ff8546;
      width: 90%;
      min-height: 500px;
      margin: 0px auto;
      background: white;
      box-sizing: border-box;
      padding: 20px;
    }
    #webex-products {
      border: 1px solid #e4c308;
      width: 90%;
      min-height: 500px;
      margin: 0px auto;
      background: white;
      box-sizing: border-box;
      padding: 20px;
    }
    #other-products {
      border: 1px solid #40b883;
      width: 90%;
      min-height: 500px;
      margin: 0px auto;
      background: white;
      box-sizing: border-box;
      padding: 20px;
    }
    #to-product-show {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      padding-top: 30px;
      overflow: hidden;
      background: rgba(0, 0, 0, 0.5);
      padding-bottom: 100px;
      #show-component {
        position: absolute;
        top: 0;
        .link {
          display: inline-block;
          padding: 0.3em 1em;
          text-decoration: none;
          color: #40b883;
          border: solid 2px #40b883;
          border-radius: 3px;
          transition: 0.2s;
          margin-top: 20px;
          cursor: pointer;
          font-size: 1.5rem;
        }

        .link:hover {
          background: #40b883;
          color: white;
          cursor: pointer;
        }
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
}
@media screen and (min-width: 700px) and (max-width: 1024px) {
  #products {
    width: 100%;
    min-height: 100vh;
    padding-top: 100px;

    background: rgba(64, 184, 131, 0.1);
    #new-button-container {
      display: none;
    }
    #title {
      font-size: 1.5rem;
      font-weight: bold;
      text-align: center;
    }

    #tabMenu-container {
      width: 90%;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      margin: 0 auto;
      #tabMenu {
        padding: 0;
        display: flex;
        list-style-type: none;
        #web-tab {
          width: auto;
          padding: 10px 20px;
          color: black;
          border: 1px solid rgba(255, 61, 85);
          border-bottom: transparent;
          background-color: white;
          cursor: pointer;
          margin-left: 30px;
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
        }
        #web-tab.active {
          color: white;
          background-color: rgba(255, 61, 85);
          transition: 0.3s;
        }
        #game-tab {
          width: auto;
          padding: 10px 20px;
          color: black;
          border: 1px solid #4a78ff;
          border-bottom: transparent;
          background-color: white;
          cursor: pointer;
          margin-left: 30px;
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
        }
        #game-tab.active {
          color: white;
          background-color: #4a78ff;
          transition: 0.3s;
        }
        #ios-tab {
          width: auto;
          padding: 10px 20px;
          color: black;
          border: 1px solid #ff8546;
          border-bottom: transparent;
          background-color: white;
          cursor: pointer;
          margin-left: 30px;
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
        }
        #ios-tab.active {
          color: white;
          background-color: #ff8546;
          transition: 0.3s;
        }
        #webex-tab {
          width: auto;
          padding: 10px 20px;
          color: black;
          border: 1px solid #e4c308;
          border-bottom: transparent;
          background-color: white;
          cursor: pointer;
          margin-left: 30px;
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
        }
        #webex-tab.active {
          color: white;
          background-color: #e4c308;
          transition: 0.3s;
        }
      }
    }
    .cards-container {
      display: flex;
      flex-direction: row;
      justify-content: center;
      flex-wrap: wrap;
    }
    #other-tab {
      width: auto;
      padding: 10px 20px;
      color: black;
      border: 1px solid #40b883;
      border-bottom: transparent;
      background-color: white;
      cursor: pointer;
      margin-left: 30px;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
    }
    #other-tab.active {
      color: white;
      background-color: #40b883;
      transition: 0.3s;
    }
    #other-products {
      border: 1px solid #40b883;
      width: 90%;
      min-height: 500px;
      margin: 0px auto;
      background: white;
      box-sizing: border-box;
      padding: 20px;
    }
    #web-products {
      border: 3px solid rgba(255, 61, 85);
      width: 90%;
      min-height: 500px;
      margin: 0px auto;
      background: white;
      box-sizing: border-box;
      padding: 20px;
    }
    #game-products {
      border: 3px solid #4a78ff;
      width: 90%;
      min-height: 500px;
      margin: 0px auto;
      background: white;
      box-sizing: border-box;
      padding: 20px;
    }
    #ios-products {
      border: 3px solid #ff8546;
      width: 90%;
      min-height: 500px;
      margin: 0px auto;
      background: white;
      box-sizing: border-box;
      padding: 20px;
    }
    #webex-products {
      border: 3px solid #e4c308;
      width: 90%;
      min-height: 500px;
      margin: 0px auto;
      background: white;
      box-sizing: border-box;
      padding: 20px;
    }
    #to-product-show {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      padding-top: 30px;
      overflow: hidden;
      background: rgba(0, 0, 0, 0.5);
      padding-bottom: 800px;
      #show-component {
        position: absolute;
        top: 0;
      }
    }
    #show-component {
      position: absolute;
      top: 0;
      .link {
        display: inline-block;
        padding: 0.3em 1em;
        text-decoration: none;
        color: #40b883;
        border: solid 2px #40b883;
        border-radius: 3px;
        transition: 0.2s;
        margin-top: 20px;
        cursor: pointer;
        font-size: 1.5rem;
      }

      .link:hover {
        background: #40b883;
        color: white;
        cursor: pointer;
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
}
@media screen and (min-width: 350px) and (max-width: 700px) {
  #products {
    width: 100%;
    padding-top: 100px;
    padding-bottom: 100px;
    background: rgba(64, 184, 131, 0.1);
    #new-post-cotnainer {
      display: none;
    }
    #title {
      font-size: 2.5rem;
      font-weight: bold;
      text-align: center;
    }
    #new-button-container {
      display: none;
    }
    #tabMenu-container {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      flex-wrap: wrap;
      margin: 0 auto;

      #tabMenu {
        padding: 0;
        display: flex;
        list-style-type: none;
        width: 100%;
        flex-direction: row;
        justify-content: space-around;
        flex-wrap: wrap;
        #web-tab {
          width: auto;
          padding: 10px 20px;
          color: black;
          border: 1px solid rgba(255, 61, 85);
          background-color: white;
          cursor: pointer;
          font-size: 1.3rem;
          border-radius: 5px;
        }
        #web-tab.active {
          color: white;
          background-color: rgba(255, 61, 85);
          transition: 0.3s;
        }
        #game-tab {
          width: auto;
          padding: 10px 20px;
          color: black;
          border: 1px solid #4a78ff;

          background-color: white;
          cursor: pointer;
          font-size: 1.3rem;
          border-radius: 5px;
        }
        #game-tab.active {
          color: white;
          background-color: #4a78ff;
          transition: 0.3s;
        }
        #ios-tab {
          width: auto;
          padding: 10px 20px;
          color: black;
          border: 1px solid #ff8546;

          background-color: white;
          cursor: pointer;
          font-size: 1.3rem;
          border-radius: 5px;
        }
        #ios-tab.active {
          color: white;
          background-color: #ff8546;
          transition: 0.3s;
        }
        #webex-tab {
          width: auto;
          padding: 10px 20px;
          color: black;
          border: 1px solid #e4c308;

          background-color: white;
          cursor: pointer;
          font-size: 1.3rem;
          border-radius: 5px;
          margin: 20px 0;
        }
        #webex-tab.active {
          color: white;
          background-color: #e4c308;
          transition: 0.3s;
        }
        #other-tab {
          width: auto;
          padding: 10px 20px;
          color: black;
          border: 1px solid #40b883;

          background-color: white;
          cursor: pointer;
          font-size: 1.3rem;
          border-radius: 5px;
          margin: 20px 0;
        }
        #other-tab.active {
          color: white;
          background-color: #40b883;
          transition: 0.3s;
        }
      }
    }
    .cards-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
    }
    #web-products {
      border: 1px solid rgba(255, 61, 85);
      width: 100%;
      min-height: 500px;
      margin: 0px auto;
      background: white;
      box-sizing: border-box;
      padding: 20px;
      box-sizing: border-box;
    }
    #game-products {
      border: 1px solid #4a78ff;
      width: 100%;
      min-height: 500px;
      margin: 0px auto;
      background: white;
      box-sizing: border-box;
      padding: 20px;
      box-sizing: border-box;
    }
    #ios-products {
      border: 1px solid #ff8546;
      width: 100%;
      min-height: 500px;
      margin: 0px auto;
      background: white;
      box-sizing: border-box;
      padding: 20px;
      box-sizing: border-box;
    }
    #webex-products {
      border: 1px solid #e4c308;
      width: 100%;
      min-height: 500px;
      margin: 0px auto;
      background: white;
      box-sizing: border-box;
      padding: 20px;
      box-sizing: border-box;
    }
    #other-products {
      border: 1px solid #40b883;
      width: 100%;
      min-height: 500px;
      margin: 0px auto;
      background: white;
      box-sizing: border-box;
      padding: 20px;
      box-sizing: border-box;
    }
    #to-product-show {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      padding-top: 30px;
      overflow: hidden;
      background: rgba(0, 0, 0, 0.5);
      padding-bottom: 100px;
      box-sizing: border-box;
      #show-component {
        position: absolute;
        top: 0;
      }
    }
    #show-component {
      position: absolute;
      top: 0;
      .link {
        display: inline-block;
        padding: 0.3em 1em;
        text-decoration: none;
        color: #40b883;
        border: solid 2px #40b883;
        border-radius: 3px;
        transition: 0.2s;
        margin-top: 20px;
        cursor: pointer;
        font-size: 1.5rem;
      }

      .link:hover {
        background: #40b883;
        color: white;
        cursor: pointer;
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
}
</style>
