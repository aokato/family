<template>
  <div id="web">
    <div id="web-title">
      <span>GeekSalon Web Course</span>
    </div>

    <div id="text-box-container">
      <div v-for="n of links_length - 1" :key="n">
        <div v-if="n % 2 !== 0">
          <div class="section-title-box" v-if="link(n).first != false">
            {{ link(n).first }}
          </div>
          <div class="text-box">
            <router-link :to="link(n).url" class="topic">
              <div>
                {{ link(n).title }}
              </div>
            </router-link>
            <router-link :to="link(n + 1).url" class="topic">
              <div>
                {{ link(n + 1).title }}
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      links_length: null,
      links: [
        {
          title: "1-1. 3ヶ月の流れ",
          url: "/texts/web/1-1. 3ヶ月の流れ",
          first: "1章 Webコースの基礎",
        },
        {
          title: "1-2. DemoDayについて",
          url: "/texts/web/1-2. DemoDayについて",
          first: false,
        },
        {
          title: "2-1. HTML/CSSの概要",
          url: "/texts/web/2-1. HTML/CSSの概要",
          first: "2章 フロントエンド入門",
        },
        {
          title: "2-2. HTMLの基本",
          url: "/texts/web/2-2. HTMLの基本",
          first: false,
        },
      ],
    };
  },
  created() {
    this.links_length = this.links.length;
  },
  computed: {
    link: function() {
      return function(id) {
        let array = this.links;
        return array[id - 1];
      };
    },
  },
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
      width: 100%;
      margin-top: 20px;
      .section-title-box {
        display: block;
        width: 100%;
        font-size: 2rem;
        background: rgba(255, 61, 85);
        padding: 30px;
        text-align: center;
        box-sizing: border-box;
      }
      .text-box {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        width: 100%;
        margin: 20px auto 20px auto;

        .topic {
          display: block;
          width: 40%;
          padding: 10px;
          text-align: left;
          background: white;
          color: rgba(255, 61, 85);
          border: 2px solid rgba(255, 61, 85);
          font-weight: bold;
          transition: all 300ms 0s ease;
        }
      }
      .topic:hover {
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
