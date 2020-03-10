<template>
  <div>
    <!--<div>{{ page_title }}</div> -->
    <div v-html="Md"></div>
  </div>
</template>

<script>
import error404 from "@/assets/markdowns/NotFound.md";
import web11 from "@/assets/markdowns/web/1-1/1-1.md";
import web12 from "@/assets/markdowns/web/1-2/1-2.md";
import web21 from "@/assets/markdowns/web/2-1/2-1.md";
import web22 from "@/assets/markdowns/web/2-2/2-2.md";
export default {
  props: {
    folder: String,
    title: String,
  },
  created() {
    let which_md = this.folder + "/" + this.title;
    this.whichtext(which_md);
  },
  data() {
    return {
      page_title: this.title,
      error404: error404,
      web11: web11,
      web12: web12,
      web21: web21,
      web22: web22,
    };
  },
  methods: {
    whichtext: function(which_md) {
      switch (which_md) {
        case "web/1-1. 3ヶ月の流れ":
          this.Md = this.web11;
          break;

        case "web/1-2. DemoDayについて":
          this.Md = this.web12;
          break;

        default:
          this.page_title = null;
          this.Md = this.error404;
          break;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@media screen and (min-width: 1024px) {
}
@media screen and (min-width: 700px) and (max-width: 1024px) {
}
@media screen and (min-width: 350px) and (max-width: 700px) {
}
</style>
