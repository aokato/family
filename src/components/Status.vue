<template>
  <div id="status">
    <div id="status-box1">
      <span id="name">ファミリィ</span>
      <span id="level">Lv: 40</span>
      <span id="grade">Web 15期</span>
      <span id="univ-year">大学3年</span>
    </div>
    <div id="status-box2">
      <img
        src="https://img.gifmagazine.net/gifmagazine/images/37493/original.gif"
      />
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
@media screen and (min-width: 1024px) {
  #status {
    width: 70%;
    background: black;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    z-index: 1;
    #status-box1 {
      width: 40%;
      height: 30vh;
      border: 4px solid white;
      border-radius: 20px;
      margin-left: 30px;
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      #name {
        display: block;
        width: 70%;
        height: 5vh;
        color: white;
        position: absolute;
        top: -20px;
        left: 15%;
        z-index: 1;
        background: black;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        font-size: 1.3rem;
      }
      #level {
        display: block;
        color: white;
        font-size: 1.3rem;
      }
      #grade {
        display: block;
        margin-top: 10px;
        color: white;
        font-size: 1.3rem;
      }
      #univ-year {
        display: block;
        margin-top: 10px;
        color: white;
        font-size: 1.3rem;
      }
    }
    #status-box2 {
      width: 60%;
      height: 30vh;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      img {
        display: block;
        width: 40%;
        height: auto;
      }
    }
  }
}
@media screen and (min-width: 700px) and (max-width: 1024px) {
  #status {
    width: 70%;
    background: black;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    z-index: 1;
    #status-box1 {
      width: 40%;
      height: 15vh;
      border: 4px solid white;
      border-radius: 20px;
      margin-left: 30px;
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      #name {
        display: block;
        width: 70%;
        height: 5vh;
        color: white;
        position: absolute;
        top: -25px;
        left: 15%;
        z-index: 1;

        background: black;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        font-size: 1.2rem;
      }
      #level {
        display: block;
        color: white;
        font-size: 1.2rem;
      }
      #grade {
        display: block;
        margin-top: 10px;
        color: white;
        font-size: 1.2rem;
      }
      #univ-year {
        display: block;
        margin-top: 10px;
        color: white;
        font-size: 1.2rem;
      }
    }
    #status-box2 {
      width: 60%;
      height: 30vh;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      img {
        display: block;
        width: 40%;
        height: auto;
      }
    }
  }
}
@media screen and (min-width: 350px) and (max-width: 700px) {
  #status {
    width: 95%;
    background: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 1;
    #status-box1 {
      width: 80%;
      height: 20vh;
      border: 4px solid white;
      border-radius: 20px;
      margin-top: 30px;
      padding-top: 20px;
      padding-bottom: 20px;
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      #name {
        display: block;
        width: 70%;
        height: 2vh;
        color: white;
        position: absolute;
        top: -10px;
        left: 15%;
        z-index: 1;
        background: black;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        font-size: 1.1rem;
      }
      #level {
        display: block;
        color: white;
        font-size: 1.1rem;
      }
      #grade {
        display: block;
        margin-top: 10px;
        color: white;
        font-size: 1.1rem;
      }
      #univ-year {
        display: block;
        margin-top: 10px;
        color: white;
        font-size: 1.1rem;
      }
    }
    #status-box2 {
      width: 60%;
      height: 30vh;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      img {
        display: block;
        width: 20%;
        height: auto;
      }
    }
  }
}
</style>
