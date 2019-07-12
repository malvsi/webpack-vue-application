<template>
  <div class="shopcart-container">
    <!-- 商品列表区域 -->
    <div class="goodslist">
      <div class="mui-card" v-for="(item,i) in goodslist" :key="item.id">
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <mt-switch
              v-model="$store.getters.getGoodsSelected[item.id]"
              @change="check($store.getters.getGoodsSelected[item.id],item.id)"
            ></mt-switch>
            <img src="../../images/bimimage.jpg" />
            <div class="info">
              <h1>{{ item.title }}</h1>
              <p>
                <span class="price">￥{{ item.price }}</span>
                <numberbox
                  style="height:25px"
                  @cb="countChange"
                  :count="item.count"
                  :goodsid="item.id"
                ></numberbox>
                <a href="#" @click="delDoodsFromCart(item.id,i)">删除</a>
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
          <div class="mui-card-content-inner">
            <div class="left">
              <p>
                合计：
                <span class="total">￥{{ $store.getters.getTotalPrice }}</span>
              </p>
            </div>
            <div class="right">
              <mt-button type="danger">
                去结算(
                <span>{{ $store.getters.getAllCount }}</span> )
              </mt-button>
            </div>
          </div>
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
      goodslist: [],
      maxCount: 0,
      checkall: ""
    };
  },
  created() {
    this.getGoodsList();
  },
  methods: {
    getGoodsList() {
      var list = this.$store.getters.getGoodsList;

      if (list.length == 0) {
        this.goodslist = this.$store.getters.getInitGoodsList;
        console.log("form getInitGoodsList");
      } else {
        this.goodslist = list;
        console.log("form getGoodsList");
      }
    },
    check(flag, id) {
      this.$store.commit("updateGoodsSelected", { selected: flag, id: id });
    },
    countChange(info) {
      this.$store.commit("updateGoodsCount", info);
    },
    delDoodsFromCart(id, i) {
      this.$store.commit("delGoodsForId", { id: id, index: i });
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

  .settlement {
    .mui-card-content-inner {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .left {
        p {
          margin: 0;
        }
        * {
          color: black;
        }

        .total {
          font-size: 16px;
          color: red;
          font-weight: bold;
        }
      }

      .right {
        .mint-button {
          font-size: 16px;
          font-weight: normal;
          span {
            font-weight: bold;
            font-size: 18px;
          }
        }
      }
    }
  }
}
</style>
