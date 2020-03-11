<template>
  <div id="app">
    <Header data-aos="fade-down" data-aos-duration="1200"></Header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import AOS from "aos";
AOS.init();
export default {
  name: "App",
  components: {
    Header,
  },

  data: () => ({
    //
  }),
};
</script>
<style lang="scss" scoped></style>
