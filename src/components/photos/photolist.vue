<template>
  <div class="photo-container">
    <!-- 头部导航条 -->
    <div id="slider" class="mui-slider">
      <div
        id="sliderSegmentedControl"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll">
          <a
            v-for="item in videoCategory"
            :key="item.data.title"
            :class="['mui-control-item',item.data.id===0? 'mui-active':'']"
            :href="'#item'+ item.data.id  +'mobile'"
            data-wid="tab-top-subpage-1.html"
            @click="getPhotoList"
          >{{ item.data.title | cutInitail}}</a>
        </div>
      </div>
    </div>

    <!-- 图片列表 -->
    <div class="photo-content" v-show="flag">
      <!-- 使用 transition-group 包裹需要切换动画的列表项 -->
      <transition-group class="photolist">
        <li class="photoitem" v-for="item in photolist" :key="item.id">
          <img v-lazy="item.url" />
          <div class="photo-info">
            <h1>App updated. Recompiling...</h1>
            <p>This is one-sided shadow effect! Shadow is no longer a real shadow projection, shadow sharpness diffuses outward, more shadow effect!Box-shadow: -2px 0 3px-1px green, //left shadow 0-2px...</p>
            <p>this is a picture token on the internet</p>
          </div>
        </li>
      </transition-group>
    </div>
  </div>
</template>

<script>
import mui from "../../lib/mui-master/dist/js/mui.js";
import { setTimeout } from "timers";

export default {
  data() {
    return {
      videoCategory: [],
      photolist: [],
      flag: true // 模拟 图片列表 显示/隐藏切换标示
    };
  },
  created() {
    //  加载数据时获取 图片分类 和 图片列表 信息
    this.getAllVideoCategory();
    this.getPhotoByInternet();
  },
  mounted() {
    mui(".mui-scroll-wrapper").scroll({
      // 组件挂载时，实现图片分类导航的 滚动 效果
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  },
  methods: {
    getAllVideoCategory() {
      // 获取图片分类列表信息
      this.$http.get("https://api.apiopen.top/videoCategory").then(result => {
        result.body.result.itemList.unshift({
          // 自动添加 ‘全部’ 分类 id 设为0
          data: {
            title: "#全部",
            id: 0
          }
        });
        this.videoCategory = result.body.result.itemList;
      });
    },
    getPhotoByInternet() {
      // 页面加载时创建 photolist 列表
      for (let i = 0; i < 20; i++) {
        this.photolist.push({
          id: i,
          url: "https://api.ooopn.com/image/beauty/api.php"
        });
      }
    },
    getPhotoList() {
      // 点击导航栏实现切换动画
      this.flag = false;
      this.photolist = [];
      setTimeout(() => {
        this.getPhotoByInternet();

        this.flag = true;
      }, 50);
    }
  },
  filters: {
    cutInitail(data) {
      // 剔除字符串中第一个字符
      return data.substr(1);
    }
  }
};
</script>

<style lang="less" scoped>
* {
  touch-action: pan-x;
}

.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

.v-enter-active,
.v-leave-active {
  transition: all 0.4s ease;
}

.v-move {
  transition: all 0.6s ease;
}
.v-leave-active {
  position: absolute;
}

.photo-content {
  .photolist {
    margin: 0;
    padding: 10px;
    padding-bottom: 0;
    list-style: none;

    .photoitem {
      position: relative;
      text-align: center;
      box-shadow: 0 0 6px black;
      background-color: #ccc;
      margin-bottom: 10px;

      .photo-info {
        position: absolute;
        bottom: 0;
        height: 120px;
        width: 100%;
        text-align: left;
        color: white;
        padding: 5px;
        background-color: rgba(0, 0, 0, 0.5);

        h1 {
          font-size: 14px;
        }

        p {
          color: white;
          font-size: 13px;
        }
      }

      img {
        position: relative;
        bottom: 0;
        width: 100%;
        height: 300px;
        vertical-align: middle;
      }
    }

    img[lazy="loading"] {
      width: 100%;
      height: 300px;
      margin: auto;
    }
  }
}
</style>
