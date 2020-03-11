<template>
  <div id="product-card">
    <div id="image-container"></div>
    <div id="info-container"></div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
@media screen and (min-width: 1024px) {
  #product-card {
    background: white;
    width: 300px;
    height: 400px;
    border: 2px solid rgba(0, 0, 0, 0.1);
    #image-container {
    }
    #info-container {
    }
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
