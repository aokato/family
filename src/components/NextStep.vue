<template>
  <div id="next-step">あなたが次にやる教材は以下です</div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
@media screen and (min-width: 1024px) {
  #next-step {
    background: white;
    width: 70%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
}
@media screen and (min-width: 700px) and (max-width: 1024px) {
  #next-step {
    background: white;
    width: 70%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
}
@media screen and (min-width: 350px) and (max-width: 700px) {
  #next-step {
    background: white;
    width: 95%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
}
</style>
