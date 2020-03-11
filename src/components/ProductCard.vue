<template>
  <div id="product-card">
    <div id="image-container">
      <img :src="product.image" />
    </div>
    <div id="info-container">
      <h2 v-if="product.name.length <= 13">
        <span>{{ product.name }}</span>
      </h2>
      <h3 v-else-if="product.name.length > 13">
        <span>{{ product.name }}</span>
      </h3>
      <p>{{ product.info }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    product: Object,
  },
};
</script>
<style lang="scss" scoped>
@media screen and (min-width: 1024px) {
  #product-card {
    background: white;
    width: 350px;
    height: 500px;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    margin: 20px;
    #image-container {
      width: 100%;

      img {
        width: 100%;
        max-height: 200px;
      }
    }
    #info-container {
      padding: 10px;
      h2 {
        text-align: center;
        font-weight: bold;
        span {
          display: inline-block;
          padding-bottom: 10px;
          border-bottom: 2px dashed rgba(64, 184, 131, 0.5);
        }
      }
      h3 {
        text-align: center;
        font-weight: bold;
        span {
          display: inline-block;
          padding-bottom: 10px;
          border-bottom: 2px dashed rgba(64, 184, 131, 0.5);
        }
      }
    }
  }
  #product-card:hover {
    transform: scale(1.03, 1.03);
    cursor: pointer;
  }
}
@media screen and (min-width: 700px) and (max-width: 1024px) {
  #product-card {
    background: white;
    width: 70%;
    border: 2px solid black;
  }
}
@media screen and (min-width: 350px) and (max-width: 700px) {
  #product-card {
    background: white;
    width: 70%;
    border: 2px solid black;
  }
}
</style>
