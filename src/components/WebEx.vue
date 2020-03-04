<template>
  <div id="webex">
    <div id="webex-title">
      <span>GeekSalon WebEx Course</span>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
@media screen and (min-width: 1024px) {
  #webex {
    background: white;
    width: 100%;
    border: 2px solid #e4c308;
    margin-top: 30px;
    min-height: 70vh;
    #webex-title {
      width: 100%;
      height: 120px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      background: #e4c308;
      span {
        font-size: 2rem;
        color: white;
      }
    }
  }
}
@media screen and (min-width: 700px) and (max-width: 1024px) {
  #webex {
    background: white;
    width: 100%;
    border: 2px solid #e4c308;
    margin-top: 30px;
    min-height: 70vh;
  }
}
@media screen and (min-width: 350px) and (max-width: 700px) {
  #webex {
    background: white;
    width: 100%;
    border: 2px solid #e4c308;
    margin-top: 30px;
    min-height: 70vh;
    #webex-title {
      width: 100%;
      height: 60px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      background: #e4c308;
      span {
        font-size: 1rem;
        color: white;
      }
    }
  }
}
</style>
