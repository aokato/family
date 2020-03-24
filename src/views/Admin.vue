<template>
  <div class="admin-container">
    <ul>
      <li v-for="item in list" v-bind:key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
import { db } from "@/firebase";

export default {
  data() {
    return {
      list: [],
    };
  },
  mounted() {
    db.collection("public-users")
      .where("status", "==", "unApproved")
      .get()
      .then(snapshot => {
        const array = [];
        snapshot.forEach(doc => {
          array.push(doc.data());
        });
        this.list = array;
      });
  },
};
</script>

<style lang="scss" scoped>
.admin-container {
  margin-top: 100px;
}
</style>
