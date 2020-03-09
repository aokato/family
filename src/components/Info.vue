<template>
  <div>
    <div v-html="sampleMd"></div>
  </div>
</template>

<script>
import sampleMd from "@/assets/markdowns/sample.md";

export default {
  created() {
    this.sampleMd = sampleMd;
  },
};
</script>
<style lang="scss" scoped>
@media screen and (min-width: 1024px) {
  #info {
    background: white;
    width: 70%;
    border: 2px solid black;
  }
}
@media screen and (min-width: 700px) and (max-width: 1024px) {
  #info {
    background: white;
    width: 70%;
    border: 2px solid black;
  }
}
@media screen and (min-width: 350px) and (max-width: 700px) {
  #info {
    background: white;
    width: 70%;
    border: 2px solid black;
  }
}
</style>
