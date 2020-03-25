<template>
  <div id="info">
    <div class="info_title">
      〜GeekSalonニュース〜
    </div>
    <div class="info_container" v-for="(info, index) in info" :key="index">
      <span style="border-bottom: solid 1px black; color: blue;"
        >・{{ info.description }}</span
      >
    </div>
  </div>
</template>
<script>
import { db } from "@/firebase";

export default {
  data() {
    return {
      info: [],
    };
  },
  firestore: {
    info: db.collection("info").orderBy("date"),
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
  .info_title {
    margin: 10px 10px;
    text-align: center;
  }
  .info_container {
    margin: 0 auto;
    width: 90%;
    margin-bottom: 15px;
  }
}
@media screen and (min-width: 700px) and (max-width: 1024px) {
  #info {
    background: white;
    width: 70%;
    border: 2px solid black;
  }
  .info_title {
    margin: 10px 10px;
    text-align: center;
  }

  .info_container {
    margin: 0 auto;
    width: 90%;
  }
}
@media screen and (min-width: 350px) and (max-width: 700px) {
  #info {
    background: white;
    width: 70%;
    border: 2px solid black;
  }
  .info_title {
    margin: 10px 10px;
    text-align: center;
  }

  .info_container {
    margin: 0 auto;
    width: 90%;
  }
}
</style>
