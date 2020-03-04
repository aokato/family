<template>
  <div id="game">
    <div id="game-title">
      <span>GeekSalon Game Course</span>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
@media screen and (min-width: 1024px) {
  #game {
    background: white;
    width: 100%;
    border: 2px solid #4a78ff;
    margin-top: 30px;
    min-height: 70vh;
    #game-title {
      width: 100%;
      height: 120px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      background: #4a78ff;
      span {
        font-size: 2rem;
        color: white;
      }
    }
  }
}
@media screen and (min-width: 700px) and (max-width: 1024px) {
  #game {
    background: white;
    width: 100%;
    border: 2px solid #4a78ff;
    margin-top: 30px;
    min-height: 70vh;
    #game-title {
      width: 100%;
      height: 120px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      background: #4a78ff;
      span {
        font-size: 2rem;
        color: white;
      }
    }
  }
}
@media screen and (min-width: 350px) and (max-width: 700px) {
  #game {
    background: white;
    width: 100%;
    border: 2px solid #4a78ff;
    margin-top: 30px;
    min-height: 70vh;
    #game-title {
      width: 100%;
      height: 60px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      background: #4a78ff;
      span {
        font-size: 1rem;
        color: white;
      }
    }
  }
}
</style>
