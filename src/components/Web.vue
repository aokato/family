<template>
  <div id="web">
    <div id="web-title">
      <span>GeekSalon Web Course</span>
    </div>
    <div id="text-box-container">
      <div class="text-box" v-for="text in texts" :key="text.id">
        <div class="topic">{{ text.title }}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      texts: null,
    };
  },
  mounted() {
    this.axios
      .get("https://family-rails-api.herokuapp.com/api/v1/web.json")
      .then(res => {
        this.texts = res.data;
      });
  },
};
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
    #text-box-container {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;
      width: 100%;
      margin-top: 30px;
      .text-box {
        width: 40%;

        border: 2px solid rgba(255, 61, 85);
        transition: all 300ms 0s ease;
        margin: 20px;
        .topic {
          width: 100%;
          padding: 10px;
          text-align: left;
          background: white;
          color: rgba(255, 61, 85);
          font-weight: bold;
        }
      }
      .text-box:hover {
        transform: scale(1.05, 1.05);
        cursor: pointer;
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
    #text-box-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      margin-top: 30px;
      .text-box {
        width: 80%;
        border: 2px solid rgba(255, 61, 85);
        transition: all 300ms 0s ease;
        margin: 20px;
        .topic {
          width: 100%;
          padding: 10px;
          text-align: left;
          background: white;
          color: rgba(255, 61, 85);
          font-weight: bold;
        }
      }
      .text-box:hover {
        transform: scale(1.05, 1.05);
        cursor: pointer;
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
    #text-box-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      margin-top: 30px;
      .text-box {
        width: 90%;

        border: 2px solid rgba(255, 61, 85);
        transition: all 300ms 0s ease;
        margin: 20px;
        .topic {
          width: 100%;
          padding: 10px;
          text-align: left;
          background: white;
          color: rgba(255, 61, 85);
        }
        .body {
          display: none;
        }
      }
      .text-box:hover {
        transform: scale(1.05, 1.05);
        cursor: pointer;
      }
    }
  }
}
</style>
