<template>
  <div id="app">
    <Header></Header>
    <Top></Top>
  </div>
</template>


<script>
import Header from '@/components/Header.vue'
import Top from '@/views/Top.vue'
export default {
  name: 'App',
  components: {
    Header,
    Top
  }
}
</script>
<style lang="scss">
html{
   margin:0;
   padding: 0;
}
body{
   margin:0;
   padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}


</style>
