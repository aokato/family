<template>
  <div>
    <div>{{ title }}</div>
    <div v-html="Md"></div>
  </div>
</template>

<script>
import error404 from "@/assets/markdowns/NotFound.md";
import web11 from "@/assets/markdowns/web/1-1.md";
import web12 from "@/assets/markdowns/web/1-2.md";
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
      error404: error404,
      web11: web11,
      web12: web12,
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
          this.Md = this.error404;
          break;
      }
    },
  },
};
</script>
