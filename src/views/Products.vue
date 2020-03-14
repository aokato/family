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
      コンテンツ3
    </div>
    <div id="webex-products" class="cards-container" v-else-if="active === 4">
      コンテンツ4
    </div>
    <div id="other-products" class="cards-container" v-else-if="active === 5">
      コンテンツ4
    </div>
    <transition name="fade">
      <div id="to-product-show" v-show="show">
        <div id="show-component">
          <ProductShow
            :show.sync="show"
            :post="false"
            :which_product="which_product"
          ></ProductShow>
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
      which_product: null,
      show: false,
      post_show: false,
      web_products: [
        {
          name: "横国の森",
          image:
            "http://res.cloudinary.com/dyl2mrrok/image/upload/v1567933323/n4ydwrf1d667yo3v8g81.png",
          info: "横国の授業と教員を横浜国大生視点から口コミするサイト",
          maker: "尾りょーた",
          course: "Web",
          langages: ["HTML5", "CSS3", "Ruby", "Ruby on Rails"],
        },
        {
          name: "Keio Search",
          image:
            "http://res.cloudinary.com/dyl2mrrok/image/upload/v1579535788/xroikhoxrtmog8e9nt4g.png",
          info:
            "とあるﾒﾝﾀｰが受講生時代の三ヶ月に作ったものです。。 あれから手は加わってないバージョンです。。 これを見ると、自分もあの頃はもっと未熟だったんだなぁと思います。。。精進精進！🔥",
          maker: "しょーたろー",
          course: "Web",
          langages: ["HTML5", "CSS3", "Ruby", "Ruby on Rails"],
        },
        {
          name: "カフェログ",
          image:
            "http://res.cloudinary.com/dyl2mrrok/image/upload/v1577097826/pebboxgmrvvzidlurrpf.png",
          info: "大学生の為のカフェ情報発信サイト",
          maker: "しゅん",
          course: "Web",
          langages: ["HTML5", "CSS3", "Ruby", "Ruby on Rails", "Bootstrap"],
        },
        {
          name: "【公式】東京ディズニーランド",
          image:
            "https://media2.tokyodisneyresort.jp/home/tdl/top/mainL_201910_01.jpg",
          info:
            "東京ディズニーランドにて、楽しくかけがえのない思い出を残していただけるよう、東京ディズニーランドのイベント情報、アトラクションなど施設情報から、チケット、交通アクセスなどをご案内します。",
          maker: "チームラボ",
          course: "Web",
          langages: ["HTML5", "CSS3", "Ruby", "Ruby on Rails"],
        },
        {
          name: "ユニバーサル・スタジオ・ジャパン｜USJ",
          image:
            "https://ぱっさん.com/wp-content/uploads/2019/11/%E3%83%A6%E3%83%8B%E3%83%90%E3%83%BC%E3%82%B5%E3%83%AB%E3%82%B9%E3%82%BF%E3%82%B8%E3%82%AA_1573555371.jpg",
          info:
            "異なる表情を持つさまざまなエリアは、感動がいっぱいの別世界。ハリウッドの超大作映画をテーマにした興奮のライドや人気キャラクターたちのショーなど、子どもから大人まで楽しめる、ワールドクラスのエンターテイメントを集めたテーマパーク。",
          maker: "尾りょーた",
          course: "Web",
          langages: ["HTML5", "CSS3", "Ruby", "Ruby on Rails"],
        },
        {
          name: "ユニバーサル・スタジオ・ジャパン｜USJ",
          image:
            "https://ぱっさん.com/wp-content/uploads/2019/11/%E3%83%A6%E3%83%8B%E3%83%90%E3%83%BC%E3%82%B5%E3%83%AB%E3%82%B9%E3%82%BF%E3%82%B8%E3%82%AA_1573555371.jpg",
          info:
            "異なる表情を持つさまざまなエリアは、感動がいっぱいの別世界。ハリウッドの超大作映画をテーマにした興奮のライドや人気キャラクターたちのショーなど、子どもから大人まで楽しめる、ワールドクラスのエンターテイメントを集めたテーマパーク。",
          maker: "ゆーた",
          course: "Web",
          langages: ["HTML5", "CSS3", "Ruby", "Ruby on Rails"],
        },
        {
          name: "ユニバーサル・スタジオ・ジャパン｜USJ",
          image:
            "https://ぱっさん.com/wp-content/uploads/2019/11/%E3%83%A6%E3%83%8B%E3%83%90%E3%83%BC%E3%82%B5%E3%83%AB%E3%82%B9%E3%82%BF%E3%82%B8%E3%82%AA_1573555371.jpg",
          info:
            "異なる表情を持つさまざまなエリアは、感動がいっぱいの別世界。ハリウッドの超大作映画をテーマにした興奮のライドや人気キャラクターたちのショーなど、子どもから大人まで楽しめる、ワールドクラスのエンターテイメントを集めたテーマパーク。",
          tags: ["美しいグラフィック", "横スク"],
          course: "Web",
          langages: ["HTML5", "CSS3", "Ruby", "Ruby on Rails"],
        },
        {
          name: "ユニバーサル・スタジオ・ジャパン｜USJ",
          image:
            "https://ぱっさん.com/wp-content/uploads/2019/11/%E3%83%A6%E3%83%8B%E3%83%90%E3%83%BC%E3%82%B5%E3%83%AB%E3%82%B9%E3%82%BF%E3%82%B8%E3%82%AA_1573555371.jpg",
          info:
            "異なる表情を持つさまざまなエリアは、感動がいっぱいの別世界。ハリウッドの超大作映画をテーマにした興奮のライドや人気キャラクターたちのショーなど、子どもから大人まで楽しめる、ワールドクラスのエンターテイメントを集めたテーマパーク。",
          course: "Web",
          langages: ["HTML5", "CSS3", "Ruby", "Ruby on Rails"],
        },
      ],
      game_products: [
        {
          name: "MonsterEscape",
          image:
            "http://res.cloudinary.com/dyl2mrrok/image/upload/v1583845861/iyredtlyxzv2gqpndvzy.png",
          info:
            "見つかると追いかけてくるモンスターから逃げる、逃走中のようなゲームです。",
          maker: "尾ゆーた",
          course: "Game",
          langages: ["C#", "Unity"],
        },
        {
          name: "StrangeDreamTrips",
          image:
            "http://res.cloudinary.com/dyl2mrrok/image/upload/v1575362109/hsr2ghysymwfeygfenww.png",
          info:
            "Unityちゃんの夢の世界を旅する横スクロール×シューティングゲーム",
          maker: "匿名さん",
          course: "Game",
          langages: ["C#", "Unity"],
        },
        {
          name: "CatAdventure",
          image:
            "http://res.cloudinary.com/dyl2mrrok/image/upload/v1571898281/z4oaewiapvzlibobgib8.png",
          info:
            "次々と現れる障害物を避けよう！ クッキーをゲットしてボーナスポイントを貰いながら高得点を目指そう！",
          maker: "こもり",
          course: "Game",
          langages: ["C#", "Unity"],
        },
        {
          name: "ユニバーサル・スタジオ・ジャパン｜USJ",
          image:
            "https://ぱっさん.com/wp-content/uploads/2019/11/%E3%83%A6%E3%83%8B%E3%83%90%E3%83%BC%E3%82%B5%E3%83%AB%E3%82%B9%E3%82%BF%E3%82%B8%E3%82%AA_1573555371.jpg",
          info:
            "異なる表情を持つさまざまなエリアは、感動がいっぱいの別世界。ハリウッドの超大作映画をテーマにした興奮のライドや人気キャラクターたちのショーなど、子どもから大人まで楽しめる、ワールドクラスのエンターテイメントを集めたテーマパーク。",
          maker: "USJ管理人",
          course: "Game",
          langages: ["C#", "Unity"],
        },
      ],
    };
  },
  created() {
    db.collection("tweets")
      .get()
      .then(snapshot => {
        snapshot.docs.forEach(doc => {
          this.tweets.push({
            id: doc.id,
            ...doc.data(),
          });
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
      } else {
        id = "webex-product-" + index;
      }
      let element = document.getElementById(id).getBoundingClientRect();
      let to_product_show = document.getElementById("to-product-show");
      let products = document.getElementById("products");
      to_product_show.style.height = products.scrollHeight + "px";
      let y = window.pageYOffset + element.top - 80;
      show_component.style.top = y + "px";
      this.which_product = product;
      this.show = true;
    },

    clicked_post: function() {
      let products = document.getElementById("products");
      let post_container = document.getElementById("new-post-cotnainer");
      let height = products.scrollHeight;
      post_container.style.height = height + "px";
      this.post_show = true;
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
    min-height: 100vh;
    padding-top: 100px;
    padding-bottom: 100px;
    background: rgba(64, 184, 131, 0.1);
    #new-button-container {
      display: none;
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
      padding-bottom: 100px;
      #show-component {
        position: absolute;
        top: 0;
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
