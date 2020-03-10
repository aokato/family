<template>
  <div id="web">
    <div id="web-title">
      <span>GeekSalon Web Course</span>
    </div>

    <div id="text-box-container">
      <div class="text-box" v-for="link in links" :key="link.id">
        <router-link :to="link.url">
          <div class="topic">{{ link.title }}</div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      links: [
        { title: "1-1. 3ヶ月の流れ", url: "/texts/web/1-1. 3ヶ月の流れ" },
        {
          title: "1-2. DemoDayについて",
          url: "/texts/web/1-2. DemoDayについて",
        },
      ],
    };
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>
a {
  text-decoration: none;
}
@media screen and (min-width: 1024px) {
  #web {
    background: white;
    width: 100%;
    border: 2px solid rgba(255, 61, 85);
    margin-top: 30px;
    min-height: 70vh;
    position: relative;
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
    .post {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      padding-right: 60px;
      padding-top: 20px;
      span {
        display: inline-block;
        width: 200px;
        font-size: 1.3rem;
        color: black;
        padding: 5px 10px;
        border: 1px solid black;
        background: rgba(255, 61, 85);
        color: white;
        text-align: center;
        cursor: pointer;
      }
    }
    #text-box-container {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;
      width: 100%;
      margin-top: 20px;
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
    #post-container {
      position: absolute;
      width: 90vw;
      top: -100px;
      left: -90px;
      z-index: 5;
      padding: 30px;

      overflow: hidden;
      h1 {
        text-align: center;
        color: white;
      }
    }
    .fade-enter-active,
    .fade-leave-active {
      will-change: opacity;
      transition: opacity 500ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    }
    .fade-enter,
    .fade-leave-to {
      opacity: 0;
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
    .post {
      display: none;
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
    .post {
      display: none;
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
