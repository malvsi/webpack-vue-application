<template>
  <div class="goodsdetail-container">
    <!-- 商品图片展示区域 -->
    <div class="goods-img">
      <swiper :lunbotulist="goodsimg" :isfull="false"></swiper>
    </div>

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

        <!-- 购买区域 -->
        <numberbox :maxcount="maxCount" @cb="countchange"></numberbox>

        <div class="control-button">
          <mt-button type="primary" size="normal" @click="buygoods">立即购买</mt-button>
          <mt-button type="danger" size="normal" @click="addcart">加入购物车</mt-button>
        </div>
      </div>
    </div>

    <!-- 商品详情 -->
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号：</p>
          <p>库存情况：{{ }}</p>
          <p>上架时间：</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <mt-button type="primary" size="large" plain @click="godesc">图文介绍</mt-button>
        <mt-button type="danger" size="large" plain @click="gocomments">商品评论</mt-button>
      </div>
    </div>

    <!-- 购物车小球的动画实现 -->
    <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
      <div class="ball" v-show="ballFlag" ref="ball">{{ count }}</div>
    </transition>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
import swiper from "../subcomponents/swiper.vue";
import mui from "../../lib/mui-master/dist/js/mui.min.js";
import numberbox from "../subcomponents/numberbox.vue";
import { setTimeout } from 'timers';

export default {
  data() {
    return {
      goodsimg: [
        {
          id: 1,
          img_url: require("../../images/bimimage.jpg")
        },
        {
          id: 2,
          img_url: require("../../images/bimimage.jpg")
        },
        {
          id: 3,
          img_url: require("../../images/bimimage.jpg")
        }
      ],
      maxCount: 28,
      ballFlag: false,
      count: 1
    };
  },

  created() {
    // this.getSimulateMaxCount();
  },
  components: {
    swiper,
    numberbox
  },
  methods: {
    buygoods() {
      console.log("购买成功");
    },
    addcart() {   // 加入购物车要执行的逻辑操作
      this.ballFlag = !this.ballFlag;

      // 点击加入购物车的时候的操作
      // cart 保存着当前商品信息的关键数据
      var cart = {
        id: 8086,
        title: "小米（Mi）小米Note 16G双网通版",
        count: this.count,
        selected: true,
        price: 2199,
        max: this.maxCount,
      };

      // 把 当前操作的商品数据信息 保存到 store 对象中
      this.$store.commit("addGoodsToCart", cart);
    },
    beforeEnter(el) {
      el.style.transform = "translate(0,0)";
    },
    enter(el, done) {
      // 获取小球的位置
      const ballPosition = this.$refs.ball.getBoundingClientRect();
      // 获取购物车的位置
      const cartPosition = document
        .getElementById("badge")
        .getBoundingClientRect();

      const xDist = cartPosition.left - ballPosition.left;
      const yDist = cartPosition.top - ballPosition.top;
      el.offsetWidth;
      el.style.transform = `translate(${xDist}px,${yDist}px)`;
      el.style.transition = "all 0.5s cubic-bezier(0.1, 0.7, 1.0, 0.1)";
      done();
    },
    afterEnter(el) {
      this.ballFlag = !this.ballFlag;
    },
    godesc() {
      this.$router.push({ name: "goodsdesc", params: "" });
    },
    gocomments() {
      this.$router.push({ name: "goodscomments", params: "" });
    },
    getSimulateMaxCount() {
      this.$http.get("https://api.apiopen.top/videoCategory").then(result => {
        this.maxCount = result.body.result.itemList[3].data.id;
      });
    },
    countchange(data) {
      this.count = data;
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
    border-radius: 5px;

    .mint-swipe {
      height: 500px;
    }
  }

  .goods-control {
    border: 1px solid #ccc;
    box-shadow: 0 0 4px #bbb;
    border-radius: 5px;

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
      border-radius: 5px;

      * {
        color: black;
      }

      .mui-content-padded[data-v-ee82b1e4] {
        font-size: 14px;
      }
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

.mui-card {
  border: 1px solid #ccc;
  box-shadow: 0 0 4px #bbb;
  border-radius: 5px;
  margin: 0px;

  .mui-card-footer {
    display: block;

    button {
      margin: 15px 0;
    }
  }
}

.ball {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  // background-color: red;
  color: red;
  z-index: 99;
  position: absolute;
  top: 646px;
  left: 130px;
}
</style>
