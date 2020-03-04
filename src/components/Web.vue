<template>
  <div id="web">
    <div id="web-title">
      <span>GeekSalon Web Course</span>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
@media screen and (min-width: 1024px) {
  #web {
    background: white;
    width: 100%;
    border: 2px solid rgba(255, 61, 85);
    margin-top: 30px;
    min-height: 70vh;
    #web-title {
      width: 100%;
      height: 120px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      background: rgba(255, 61, 85);
      span {
        font-size: 2rem;
        color: white;
      }
    }
  }
}
@media screen and (min-width: 700px) and (max-width: 1024px) {
  #web {
    background: white;
    width: 100%;
    border: 2px solid rgba(255, 61, 85);
    margin-top: 30px;
    min-height: 70vh;
    #web-title {
      width: 100%;
      height: 120px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      background: rgba(255, 61, 85);
      span {
        font-size: 2rem;
        color: white;
      }
    }
  }
}
@media screen and (min-width: 350px) and (max-width: 700px) {
  #web {
    background: white;
    width: 100%;
    border: 2px solid rgba(255, 61, 85);
    margin-top: 30px;
    min-height: 70vh;
    #web-title {
      width: 100%;
      height: 60px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      background: rgba(255, 61, 85);
      span {
        font-size: 1rem;
        color: white;
      }
    }
  }
}
</style>
