<template>
  <div id="show">
    <WebText :folder="folder" :title="title"></WebText>
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
};
</script>
<style lang="scss" scoped>
#show {
  width: 100%;
  margin-top: 60px;
  min-height: 100vh;
  background: rgba(64, 184, 131, 0.1);
}
</style>
