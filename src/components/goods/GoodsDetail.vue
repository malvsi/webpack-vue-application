<template>
  <div class="goodsdetail-container">
    <!-- 商品图片展示区域 -->
    <mt-swipe :auto="3000" class="goods-img">
      <mt-swipe-item>
        <img src="../../images/bimimage.jpg" />
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../../images/bimimage.jpg" />
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../../images/bimimage.jpg" />
      </mt-swipe-item>
    </mt-swipe>

    <!-- 商品操作区域 -->
    <div class="goods-control">
      <div class="control-title">
        <h1>小米（Mi）小米Note 16G双网通版</h1>
      </div>

      <div class="sell-botton">
        <p class="price">
          <span class="market-price">
            市场价：
            <span>￥2699</span>
          </span>
          <span class="sell-price">
            销售价：
            <span>￥2199</span>
          </span>
        </p>

        <div class="mui-content-padded">
          购买数量:
          <div class="mui-numbox">
            <button
              class="mui-btn mui-btn-numbox-minus"
              type="button"
              @click="Purchase-=1"
              :disabled="Purchase===0"
            >-</button>
            <input class="mui-input-numbox" type="number" v-model="Purchase" />
            <button class="mui-btn mui-btn-numbox-plus" type="button" @click="Purchase+=1">+</button>
          </div>
        </div>

        <div class="control-button">
          <mt-button type="primary" size="normal" @click="buygoods">立即购买</mt-button>
          <mt-button type="danger" size="normal" @click="addcart">加入购物车</mt-button>
        </div>
      </div>
    </div>

    <!-- 商品介绍区域 -->
    <div class="goods-info">
      <div class="info-title">
        <h1>商品参数</h1>
      </div>

      <div class="info-group">
        <p>商品货号：shaihas</p>
        <p>库存情况：60件</p>
        <p>上架时间：2015-4-20 01:19:30</p>
      </div>
    </div>

    <!-- 购物车小球的div -->
    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter">
      <div class="ball" v-show="ballFlag" ref="ball"></div>
    </transition>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      Purchase: 0,
      ballFlag: false,
    };
  },
  methods: {
    buygoods() {
      console.log("购买成功");
    },
    addcart() {
      this.ballFlag = !this.ballFlag;


      Toast({
        message: "加入购物车成功",
        position: "bottom",
        duration: 1000
      });
    },
    beforeEnter(el) {
      el.style.transform = "translate(0,0)";
    },
    enter(el,done) {
      const ballPosition = this.$refs.ball.getBoundingClientRect();
      const cartPosition = document.getElementById('badge').getBoundingClientRect();

      const xDist = cartPosition.left - ballPosition.left;
      const yDist = cartPosition.top - ballPosition.top;
      el.offsetWidth;
      el.style.transform = `translate(${xDist}px,${yDist}px)`;
      // el.style.transform = "translate(380px,922px)";
      // el.style.transform = "translate(250px,276px)";
      el.style.transition = "all 1s cubic-bezier(0.1, 0.7, 1.0, 0.1)";
      done();
    },
    afterEnter(el) {
      this.ballFlag = !this.ballFlag;
    }
  }
};
</script>

<style lang="less" scoped>
.goodsdetail-container {
  padding: 10px;

  .goods-img {
    border: 1px solid #ccc;
    box-shadow: 0 0 4px #bbb;
    margin-bottom: 6px;
    padding: 20px;
    height: 500px;
    img {
      height: 100%;
      width: 100%;
      margin: 1px auto;
    }
  }

  .goods-control {
    border: 1px solid #ccc;
    box-shadow: 0 0 4px #bbb;
    margin-bottom: 6px;

    .control-title {
      margin: 0;
      padding: 6px;
      border-bottom: 1px solid #ccc;
      h1 {
        font-size: 23px;
        font-weight: normal;
      }
    }

    .sell-botton {
      padding: 6px;
      * {
        color: black;
      }

      .price {
        margin: 0;
        .market-price {
          span {
            text-decoration: line-through;
          }
        }
        .sell-price {
          margin-left: 10px;
          span {
            color: red;
            font-size: 18px;
          }
        }
      }

      .mui-content-padded {
        margin: 3px 0;

        font-size: 13px;
        line-height: 16px;
        mui-numbox {
          height: 80%;
        }
      }

      .control-button {
        margin: 3px 0;
        padding: 10px;
        font-size: 16px;
        * {
          color: white;
        }
      }
    }
  }

  .goods-info {
    border: 1px solid #ccc;
    box-shadow: 0 0 4px #bbb;

    .info-title {
      margin: 0;
      padding: 6px;
      border-bottom: 1px solid #ccc;
      h1 {
        font-size: 23px;
        font-weight: normal;
      }
    }

    .info-group {
      color: #ccc;
      padding: 6px;
    }
  }

  .ball{
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: red;
    z-index: 99;
    position: absolute;
    top: 646px;
    left: 130px;
  }
}
</style>
