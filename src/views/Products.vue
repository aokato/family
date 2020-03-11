<template>
  <div id="products">
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
      </div>
    </div>
    <div id="web-products" v-if="active === 1"><ProductCard></ProductCard></div>
    <div id="game-products" v-else-if="active === 2">コンテンツ2</div>
    <div id="ios-products" v-else-if="active === 3">コンテンツ3</div>
    <div id="webex-products" v-else-if="active === 4">コンテンツ4</div>
  </div>
</template>
<script>
import ProductCard from "@/components/ProductCard.vue";
export default {
  components: {
    ProductCard,
  },
  data() {
    return {
      active: 1,
    };
  },
  methods: {
    change: function(num) {
      this.active = num;
    },
  },
};
</script>
<style lang="scss" scoped>
#products {
  width: 100%;
  min-height: 100vh;
  padding-top: 100px;
  background: rgba(64, 184, 131, 0.1);
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
  #web-products {
    border: 2px solid rgba(255, 61, 85);
    width: 90%;
    min-height: 500px;
    margin: 0px auto;
    background: white;
    box-sizing: border-box;
    padding: 20px;
  }
  #game-products {
    border: 2px solid #4a78ff;
    width: 90%;
    min-height: 500px;
    margin: 0px auto;
    background: white;
    box-sizing: border-box;
    padding: 20px;
  }
  #ios-products {
    border: 2px solid #ff8546;
    width: 90%;
    min-height: 500px;
    margin: 0px auto;
    background: white;
    box-sizing: border-box;
    padding: 20px;
  }
  #webex-products {
    border: 2px solid #e4c308;
    width: 90%;
    min-height: 500px;
    margin: 0px auto;
    background: white;
    box-sizing: border-box;
    padding: 20px;
  }
}
</style>
