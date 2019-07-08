<template>
  <div class="goodslist-container">
    <!-- 
    <router-link to="/home/goodsdetail" class="goods-item" v-for="item in 15" :key="item" tag="div">
      <img src="../../images/bimimage.jpg" />
      <h3 class="title">小米8 屏幕指纹版 6GB+128GB</h3>
      <div class="info">
        <p class="price">
          <span class="now">￥2999</span>
          <span class="old">￥3299</span>
        </p>

        <p class="sell">
          <span>热卖中</span>
          <span>库存60件</span>
        </p>
      </div>
    </router-link>
 -->
    <!-- 使用 vue-router 的编程式导航方式 跳转到 指定页面 -->
    <div class="goods-item" v-for="item in 15" :key="item" @click="gopath()">
      <img src="../../images/bimimage.jpg" />
      <h3 class="title">小米8 屏幕指纹版 6GB+128GB</h3>
      <div class="info">
        <p class="price">
          <span class="now">￥2999</span>
          <span class="old">￥3299</span>
        </p>

        <p class="sell">
          <span>热卖中</span>
          <span>库存60件</span>
        </p>
      </div>
    </div>

  <mt-button type="danger" size="large" @click="getMore">加载更多</mt-button>
  </div>
</template>

<script>
export default {
  methods: {
    getMore() {
      console.log("no more data....");
    },
    gopath(id) {
      // 编程式导航
      if(id != null) {
        this.$router.push({path: '/home/goodsdetail/' + id});
      }else{
        this.$router.push({path: '/home/goodsdetail'});
      }
    }
  }
};
</script>

<style lang="less" scoped>
.goodslist-container {
  padding: 6px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .goods-item {
    padding: 2px;
    border: 1px solid rgb(238, 228, 228);
    box-shadow: 0 0 4px rgb(116, 114, 114);
    width: 49%;
    margin: 5px 0;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    img {
      margin: 1px auto;
      width: 85%;
      height: 70%;
    }

    .title {
      font-size: 16px;
    }

    .info {
      background-color: #eee;

      p{
        margin: 0;
        padding: 3px;
      }

      .price {
        .now {
          color: red;
          font-size: 16px;
        }
        .old {
          margin-left: 10px;
          font-size: 14px;
          text-decoration: line-through;
        }
      }

      .sell {
        display: flex;
        justify-content: space-between;
      }
    }
  }
}
</style>
