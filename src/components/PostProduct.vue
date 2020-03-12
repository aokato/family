<template>
  <div id="product-post">
    <div id="product-post-container">
      <h1>Add Your Product</h1>
      <span id="close" @click="close()">×</span>
      <div id="product-post-right-left-container">
        <div id="product-post-container-left"></div>
        <div id="product-post-container-right">
          <div id="title-container"></div>
          <div id="product-post-maker">
            <span id="maker-title">developer：</span>
          </div>
          <div id="product-post-lang">
            <div id="lang-title">
              使用言語・フレームワーク
            </div>
          </div>
        </div>
      </div>
      <div id="product-info-container"></div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    post_show: Boolean,
  },
  data() {
    return {
      show: this.post_show,
    };
  },

  methods: {
    close: function() {
      this.menu_show = false;
      this.$emit("update:post_show", this.show);
    },
  },
};
</script>
<style lang="scss" scoped>
@media screen and (min-width: 1024px) {
  #product-post {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;

    #product-post-container {
      width: 80%;
      h1 {
        text-align: center;
      }
      background-color: rgba(255, 255, 255, 1);
      padding: 40px;
      margin-top: 70px;

      border-radius: 20px;
      min-height: 80vh;
      max-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      #close {
        position: absolute;
        top: -50px;
        right: -50px;
        color: white;
        border: none;
        border-radius: 50%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        display: inline-block;
        font-size: 60px;
        font-weight: bold;
      }
      #close:hover {
        cursor: pointer;
      }
      #product-post-right-left-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        #product-post-container-left {
          width: 40%;
          height: auto;
          margin-right: 40px;
          padding-top: 40px;
          img {
            width: 100%;
            height: auto;
          }
        }
        #product-post-container-right {
          width: 50%;
          #title-container {
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            margin-top: 30px;

            span {
              display: inline-block;
              font-size: 2.5rem;
              border-bottom: 2px dashed rgba(64, 184, 131, 0.5);
              padding-bottom: 10px;
            }
          }
          #product-post-lang {
            #lang-title {
              font-size: 1.2rem;
              margin: 20px 0;
            }
            span {
              display: inline-block;
              padding: 5px 10px;
              background: rgba(0, 0, 0, 0.1);
              font-size: 0.8rem;
              margin-right: 8px;
              margin-bottom: 8px;
              border-radius: 5px;
            }
          }
          #product-post-maker {
            #maker-title {
              font-size: 1.2rem;
              margin: 20px 0;
            }
            span {
              display: inline-block;

              font-size: 1rem;
            }
          }
        }
      }

      #product-info-container {
        width: 80%;
        padding: 10px;
        margin: 60px auto 0 auto;
        font-size: 1.3rem;
        line-height: 40px;
      }
    }
  }
}
@media screen and (min-width: 700px) and (max-width: 1024px) {
  #product-post {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;

    #product-post-container {
      width: 80%;
      background-color: rgba(255, 255, 255, 1);
      padding: 40px;
      margin-top: 70px;
      margin-bottom: 70px;
      border-radius: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      #close {
        position: absolute;
        top: -20px;
        right: 10px;
        color: black;
        border: none;
        border-radius: 50%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        display: inline-block;
        font-size: 60px;
        font-weight: bold;
      }
      #close:hover {
        cursor: pointer;
      }
      #product-post-container-left {
        width: 90%;
        height: auto;
        margin: 0 auto;
        padding-top: 40px;
        img {
          width: 100%;
          height: auto;
        }
      }
      #product-post-container-right {
        width: 90%;
        #title-container {
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          margin-top: 30px;

          span {
            display: inline-block;
            font-size: 2.5rem;
            border-bottom: 2px dashed rgba(64, 184, 131, 0.5);
            padding-bottom: 10px;
            padding-left: 10px;
            padding-right: 10px;
          }
        }
        #product-post-lang {
          #lang-title {
            font-size: 1.3rem;
          }
          span {
            display: inline-block;
            padding: 5px 10px;
            background: rgba(0, 0, 0, 0.2);
          }
        }
        #product-post-maker {
          span {
            display: inline-block;
            font-size: 1rem;

            padding-top: 20px;
          }
        }
        #product-info-container {
          width: 100%;
          padding: 10px;
          margin-top: 20px;
          margin-bottom: 40px;
          font-size: 1.4rem;
        }
      }
    }
  }
}
@media screen and (min-width: 350px) and (max-width: 700px) {
  #product-post {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 100vh;

    #product-post-container {
      width: 80%;

      background-color: rgba(255, 255, 255, 1);
      padding: 40px;
      margin-top: 70px;
      margin-bottom: 70px;
      border-radius: 20px;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      position: relative;
      #close {
        position: absolute;
        top: -50px;
        right: -50px;
        color: white;
        border: none;
        border-radius: 50%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        display: inline-block;
        font-size: 60px;
        font-weight: bold;
      }
      #close:hover {
        cursor: pointer;
      }
      #product-post-container-left {
        width: 40%;
        height: auto;
        margin-right: 40px;
        padding-top: 40px;
        img {
          width: 100%;
          height: auto;
        }
      }
      #product-post-container-right {
        width: 50%;
        #title-container {
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          margin-top: 30px;

          span {
            display: inline-block;
            font-size: 2.5rem;
            border-bottom: 2px dashed rgba(64, 184, 131, 0.5);
            padding-bottom: 10px;
          }
        }
        #product-post-lang {
          #lang-title {
            font-size: 1.3rem;
          }
          span {
            display: inline-block;
            padding: 5px 10px;
            background: rgba(0, 0, 0, 0.2);
          }
        }
        #product-post-maker {
          span {
            display: inline-block;
            font-size: 1rem;
            padding-left: 10px;
            padding-top: 20px;
          }
        }
        #product-info-container {
          width: 100%;
          padding: 10px;
          margin-top: 20px;
          font-size: 1.4rem;
        }
      }
    }
  }
}
</style>
