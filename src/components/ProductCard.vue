<template>
  <div id="product-card">
    <div id="image-container">
      <img
        :id="course + '-image-' + index"
        v-on:load="load(course, index)"
        :src="product.image"
      />
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
    index: Number,
    course: String,
  },
  methods: {
    load: function(course, index) {
      let element = course + "-image-" + index;
      let image = document.getElementById(element);
      let naturalWidth = image.naturalWidth;
      let naturalHeight = image.naturalHeight;
      if (naturalWidth % naturalHeight == 0) {
        image.style.width = 200 + "px";
        image.style.height = 200 + "px";
      } else {
        image.style.width = 100 + "%";
        image.style.maxHeight = 200 + "px";
      }
      // let targetbox = course + "-image-container-" + index;
      //   let image_box = document.getElementById(targetbox);
    },
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
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
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
    width: 250px;
    height: 400px;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    margin: 20px;
    #image-container {
      width: 100%;
    }
    #info-container {
      padding: 10px;
      h2 {
        font-size: 1.1rem;
        text-align: center;
        font-weight: bold;
        span {
          display: inline-block;
          padding-bottom: 10px;
          border-bottom: 2px dashed rgba(64, 184, 131, 0.5);
        }
      }
      h3 {
        font-size: 0.8rem;
        text-align: center;
        font-weight: bold;
        span {
          display: inline-block;
          padding-bottom: 10px;
          border-bottom: 2px dashed rgba(64, 184, 131, 0.5);
        }
      }
      p {
        font-size: 0.7rem;
      }
    }
  }
  #product-card:hover {
    transform: scale(1.03, 1.03);
    cursor: pointer;
  }
}
@media screen and (min-width: 350px) and (max-width: 700px) {
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
      p {
        font-size: 0.5rem;
      }
    }
  }
  #product-card:hover {
    transform: scale(1.03, 1.03);
    cursor: pointer;
  }
}
</style>
