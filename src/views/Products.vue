<template>
  <div id="products">
    <span>受講生のプロダクト一覧</span>
    <Edit></Edit>
  </div>
</template>
<script>
import Edit from "@/components/Edit.vue";
export default {
  components: {
    Edit,
  },
};
</script>
<style lang="scss" scoped>
#products {
  width: 100%;
  margin-top: 60px;
  min-height: 100vh;
  background: rgba(64, 184, 131, 0.1);
}
</style>
