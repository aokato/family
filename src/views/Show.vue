<template>
  <div id="show">
    {{ text.title }}
    {{ text.content }}
  </div>
</template>
<script>
export default {
  data() {
    return {
      text: null,
    };
  },
  created() {
    this.axios
      .get(
        "https://family-rails-api.herokuapp.com/api/v1/web/" +
          this.$route.params.id +
          ".json"
      )
      .then(res => {
        this.text = res.data;
      });
  },
};
</script>
<style lang="scss" scoped>
@media screen and (min-width: 1024px) {
  #show {
  }
}
@media screen and (min-width: 700px) and (max-width: 1024px) {
}
@media screen and (min-width: 350px) and (max-width: 700px) {
}
</style>
