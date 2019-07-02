<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in imgurl" :key="item.img">
        <a :href="item.url">
          <img :src="item.img" alt>
        </a>
      </mt-swipe-item>
    </mt-swipe>

    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-2 mui-col-sm-4">
        <router-link to="/home/newslist">
          <span class="mui-icon mui-icon-home"></span>
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-2 mui-col-sm-4">
        <router-link to="/home/photolist">
          <span class="mui-icon mui-icon-email"></span>
          <div class="mui-media-body">图片分享</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-2 mui-col-sm-4">
        <a href="#">
          <span class="mui-icon mui-icon-chatbubble"></span>
          <div class="mui-media-body">商品购买</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-2 mui-col-sm-4">
        <a href="#">
          <span class="mui-icon mui-icon-location"></span>
          <div class="mui-media-body">留言反馈</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-2 mui-col-sm-4">
        <a href="#">
          <span class="mui-icon mui-icon-search"></span>
          <div class="mui-media-body">视频专区</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-2 mui-col-sm-4">
        <a href="#">
          <span class="mui-icon mui-icon-phone"></span>
          <div class="mui-media-body">联系我们</div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import Vue from "vue";
var home = {
  data() {
    return {
      imgurl: [
        {
          img:
            "https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=829976434,319058117&fm=58&s=5A2329C6CE3214867721911803005094",
          url: "http://www.baidu.com"
        },
        {
          img:
            "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1525504445,2743711507&fm=58&s=4E0A8747E6336794591ABDFA0300F01D",
          url: "http://www.baidu.com"
        },
        {
          img:
            "https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=120907153,840755297&fm=58&s=DC982CD57A5F7BDC419D50270300F046",
          url: "http://www.baidu.com"
        }
      ]
    };
  }
};

export default home;
</script>


<style lang="less" scoped>

.mint-swipe {
  height: 300px;

  .mint-swipe-item {
    &:nth-of-type(1) {
      background-color: lightblue;
    }
    &:nth-of-type(2) {
      background-color: lightcyan;
    }
    &:nth-of-type(3) {
      background-color: pink;
    }

    img {
      width: 100%;
      height: 300px;
    }
  }
}

.mui-grid-view.mui-grid-9 {
  background-color: #fff;
  border: noone;
}

.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  border: none;
}
</style>

