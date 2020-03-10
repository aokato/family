<template>
  <div id="show">
    <div id="show-container">
      <WebText :folder="folder" :title="title"></WebText>
    </div>
  </div>
</template>
<script>
import WebText from "@/components/WebText.vue";
export default {
  components: {
    WebText,
  },
  data() {
    return {
      folder: this.$route.params.course,
      title: this.$route.params.title,
    };
  },
  beforeCreate() {
    document.scrollingElement.scrollTop = 0;
  },
};
</script>
<style lang="scss" scoped>
@media screen and (min-width: 1024px) {
  #show {
    width: 100%;
    padding-top: 100px;
    padding-bottom: 100px;
    min-height: 100vh;
    background: rgba(64, 184, 131, 0.1);
    display: flex;
    flex-direction: row;
    justify-content: center;
    #show-container {
      width: 70%;
      background-color: white;
      padding: 30px;
    }
  }
}
@media screen and (min-width: 700px) and (max-width: 1024px) {
  #show {
    width: 100%;
    margin-top: 60px;
    min-height: 100vh;
    background: rgba(64, 184, 131, 0.1);
  }
}
@media screen and (min-width: 350px) and (max-width: 700px) {
  #show {
    width: 100%;
    margin-top: 60px;
    min-height: 100vh;
    background: rgba(64, 184, 131, 0.1);
  }
}
</style>
