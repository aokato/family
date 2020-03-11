<template>
  <div id="product-show">
    <div id="product-show-container">
      <span id="close" @click="close()">×</span>
      <div id="product-show-container-left">
        <img :src="which_product.image" />
      </div>
      <div id="product-show-container-right">
        <div id="title-container">
          <span>{{ which_product.name }}</span>
        </div>
        <div id="product-show-maker">
          <span>developer: {{ which_product.maker }}</span>
        </div>
        <div id="product-info-container">{{ which_product.info }}</div>
        <span v-for="tag in which_product.tags" :key="tag.id">
          &ensp;&ensp;＃{{ tag }}
        </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    which_product: Object,
    show: Boolean,
  },
  data() {
    return {
      menu_show: this.show,
    };
  },
  methods: {
    close: function() {
      this.menu_show = false;
      this.$emit("update:show", this.menu_show);
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
    height: 100vh;

    #product-show-container {
      width: 80%;

      background-color: rgba(255, 255, 255, 1);
      padding: 40px;
      margin-top: 70px;
      margin-bottom: 70px;
      border-radius: 20px;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
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
      #product-show-container-left {
        width: 40%;
        height: auto;
        margin-right: 30px;
        img {
          width: 100%;
          height: auto;
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
            font-size: 2.5rem;
          }
        }
        #product-show-maker {
          span {
            display: inline-block;
            font-size: 1rem;
            padding-left: 10px;
            padding-top: 20px;
          }
        }
        #product-info-container {
          width: 100%;
          padding: 10px;
          margin-top: 20px;
          font-size: 1.4rem;
        }
      }
    }
  }
}
@media screen and (min-width: 700px) and (max-width: 1024px) {
  #product-show {
    width: 80%;
    height: 80vh;
    background: white;
  }
}
@media screen and (min-width: 350px) and (max-width: 700px) {
  #product-show {
    width: 80%;
    height: 80vh;
    background: white;
  }
}
</style>
