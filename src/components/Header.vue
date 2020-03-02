<template>
  <header>
    <div class="header-children" id="geek-salon-logo">
      <span>GeekSalonのロゴ</span>
    </div>
    <div class="header-children" id="event">
      <span>イベント</span>
    </div>
  </header>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
header {
  width: 100%;
  height: 70px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  .header-children {
    width: 150px;
    height: 70px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-right: 1px solid rgba(0, 0, 0, 0.1);
  }
}
</style>
