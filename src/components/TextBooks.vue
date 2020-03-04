<template>
  <div id="textbooks">
    <div id="textbooks-list">
      教材はこちら
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
@media screen and (min-width: 1024px) {
  #textbooks {
    background: yellowgreen;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-top: 50px;
    #textbooks-list {
      width: 80%;
      min-height: 70vh;
      background: white;
    }
  }
}
@media screen and (min-width: 700px) and (max-width: 1024px) {
  #textbooks {
    background: yellowgreen;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-top: 50px;
    #textbooks-list {
      width: 80%;
      min-height: 70vh;
      background: white;
    }
  }
}
@media screen and (min-width: 350px) and (max-width: 700px) {
  #textbooks {
    background: yellowgreen;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-top: 50px;
    #textbooks-list {
      width: 95%;
      min-height: 70vh;
      background: white;
    }
  }
}
</style>
