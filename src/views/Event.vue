<template>
  <Calendar id="event"></Calendar>
</template>
<script>
import Calendar from "@/components/Calendar.vue";

export default {
  components: {
    Calendar,
  },
};
</script>
<style lang="scss" scoped>
#event {
  width: 100%;
  margin-top: 60px;
  min-height: 100vh;
  background: rgba(64, 184, 131, 0.1);
}
</style>
