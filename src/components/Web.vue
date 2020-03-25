<template>
  <div
    id="web"
    data-aos="fade-right"
    data-aos-duration="1000"
    data-aos-once="true"
  >
    <div id="web-title">
      <span>GeekSalon Web Course</span>
    </div>

    <div id="text-box-container">
      <div v-for="n of links_length - 1" :key="n">
        <div v-if="n % 2 !== 0">
          <div
            class="section-title-box ppt"
            v-if="link(n).first != false"
            data-aos="fade-right"
            data-aos-duration="600"
            data-aos-once="true"
          >
            {{ link(n).first }}
          </div>
          <div class="text-box">
            <router-link
              :to="link(n).url"
              class="topic arrow"
              data-aos="fade-right"
              data-aos-duration="1100"
              data-aos-once="true"
            >
              <div>
                {{ link(n).title }}
              </div>
            </router-link>
            <router-link
              :to="link(n + 1).url"
              class="topic arrow"
              data-aos="fade-right"
              data-aos-duration="1400"
              data-aos-once="true"
            >
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
          text_id: "web_1",
          title: "1-1. 3ヶ月の流れ",
          url: "/web_1/web/1-1. 3ヶ月の流れ",
          first: "1章 Webコースの基礎",
        },
        {
          text_id: "web_2",
          title: "1-2. DemoDayについて",
          url: "/web_2/web/1-2. DemoDayについて",
          first: false,
        },
        {
          text_id: "web_3",
          title: "1-3. GSDCについて",
          url: "/web_3/web/1-3. GSDCについて",
          first: false,
        },
        {
          text_id: "web_4",
          title: "1-4. Webコース学習の流れ",
          url: "/web_4/web/1-4. Webコース学習の流れ",
          first: false,
        },
        {
          text_id: "web_5",
          title: "2-1. HTML/CSSの概要",
          url: "/web_5/web/2-1. HTML/CSSの概要",
          first: "2章 フロントエンド入門",
        },
        {
          text_id: "web_6",
          title: "2-2. HTMLの基本",
          url: "/web_6/web/2-2. HTMLの基本",
          first: false,
        },
        {
          text_id: "web_7",
          title: "2-3. CSSの基本",
          url: "/web_7/web/2-3. CSSの基本",
          first: false,
        },
        {
          text_id: "web_8",
          title: "2-4. ホームページの大枠を作ろう！",
          url: "/web_8/web/2-4. ホームページの大枠を作ろう！",
          first: false,
        },
        {
          text_id: "web_9",
          title: "3-1.ターミナル(コマンドプロンプト)の使い方",
          url: "/web_9/web/3-1.ターミナル(コマンドプロンプト)の使い方",
          first: "3章 バックエンド",
        },
        {
          text_id: "web_10",
          title: "3-2.Ruby on Railsとは",
          url: "/web_10/web/3-2.Ruby on Railsとは",
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
.arrow {
  div {
    text-decoration: none;
    color: rgba(255, 61, 85);
    display: inline-block;
    padding-right: 16px;
    position: relative;
  }
  div:before,
  div:after {
    content: "";
    display: block;
    -webkit-transform: skewX(45deg);
    transform: skewX(45deg);
    position: absolute;
    right: 0;
    bottom: 6px;
  }
  div:before {
    width: 12px;
    height: 3px;
    background: rgb(255, 61, 85);
  }
  div:after {
    width: 4px;
    height: 8px;
    background: rgb(255, 61, 85);
  }
}
.ppt {
  position: relative;
  padding: 2px 48px;
  border-bottom: 1px solid #62a1cb;
  font-weight: lighter;
}
.ppt:first-letter {
  color: #62a1cb;
}
.ppt:before,
.ppt:after {
  content: "";
  display: block;
  position: absolute;
}
.ppt:before {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid #ddd;
  bottom: -16px;
  left: 8px;
}
.ppt:after {
  height: 64px;
  border-left: 1px solid #ddd;
  bottom: -32px;
  left: 24px;
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
        width: 95%;
        font-size: 2rem;
        margin: 40px auto 50px auto;
        text-align: left;
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
      width: 100%;
      margin-top: 20px;
      .section-title-box {
        display: block;
        width: 100%;
        font-size: 2rem;

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
      width: 100%;
      margin-top: 20px;
      .section-title-box {
        display: block;
        width: 100%;
        font-size: 1rem;

        padding: 10px;
        text-align: center;
        box-sizing: border-box;
      }
      .text-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        margin: 20px auto 20px auto;

        .topic {
          display: block;
          width: 80%;
          padding: 10px;
          text-align: left;
          background: white;
          font-size: 0.6rem;
          color: rgba(255, 61, 85);
          border: 2px solid rgba(255, 61, 85);
          font-weight: bold;
          transition: all 300ms 0s ease;
          margin-top: 20px;
        }
      }
      .topic:hover {
        transform: scale(1.05, 1.05);
        cursor: pointer;
      }
    }
  }
}
</style>
