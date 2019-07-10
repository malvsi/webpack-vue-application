<template>
  <div class="shopcart-container">
    <!-- 商品列表区域 -->
    <div class="goodslist">
      <div class="mui-card">
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <mt-switch v-model="checked" @change="check"></mt-switch>
            <img src="../../images/bimimage.jpg" />
            <div class="info">
              <h1>小米（Mi）小米Note 16G双网通版</h1>
              <p>
                <span class="price">￥2199</span>
                <numberbox style="height:25px" :maxcount="maxCount" @cb="countChange"></numberbox>
                <a href="#">删除</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 结算区域 -->
    <div class="settlement">
      <div class="mui-card">
        <div class="mui-card-content">
          <div
            class="mui-card-content-inner"
          >这是一个最简单的卡片视图控件；卡片视图常用来显示完整独立的一段信息，比如一篇文章的预览图、作者信息、点赞数量等</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import numberbox from "../subcomponents/cart-numerbox.vue";
export default {
  data() {
    return {
      checked: true,
      maxCount: 0,
      count: 0
    };
  },
  created() {
    this.getCurrentGoodsMaxCount();
  },
  methods: {
    check() {
      this.$store.commit("addCheckGoods", this.checked);
    },
    getCurrentGoodsMaxCount() {
      // 获取当前商品的最大可购买数量
      //   this.$http.get("https://api.apiopen.top/videoCategory").then(result => {
      //     this.maxCount = result.body.result.itemList[3].data.id;
      //     console.log(this.maxCount);
      //   });
    //   this.$store.commit("getMaxCountForId", 8086);
      this.maxCount = this.$store.getters.getMaxCount;
    //   console.log(this.maxCount);
    },
    countChange(data) {
      this.count = data;
      this.$store.commit("setGoodsCount", data);
    }
  },
  components: {
    numberbox
  }
};
</script>

<style lang="less" scoped>
.shopcart-container {
  background-color: #eee;
  overflow: hidden;

  .goodslist {
    .mui-card-content-inner {
      display: flex;
      align-items: center;
      //   justify-content: space-around;
      img {
        width: 60px;
        hieght: 60px;
        margin: 0 15px;
      }

      .info {
        padding: 10px;
        h1 {
          font-size: 14px;
          margin-bottom: 10px;
        }

        .price {
          color: red;
        }
      }
    }
  }
}
</style>
