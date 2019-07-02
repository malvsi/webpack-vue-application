<template>
  <div class="photo-container">
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
          >{{ item.data.title | cutInitail}}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mui from "../../lib/mui-master/dist/js/mui.js";
import { constants } from "crypto";

export default {
  data() {
    return {
      videoCategory: [],
      id: 0
    };
  },
  created() {
    this.getAllVideoCategory();
  },
  mounted() {
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  },
  methods: {
    getAllVideoCategory() {
      // 获取视频列表信息
      this.$http.get("https://api.apiopen.top/videoCategory").then(result => {
        result.body.result.itemList.unshift({
          data: {
            title: "#全部",
            id: 0
          }
        });
        this.videoCategory = result.body.result.itemList;
      });
    }
  },
  filters: {
    cutInitail(data) {
      return data.substr(1);
    }
  }
};
</script scoped>
<style>
* {
  touch-action: pan-x;
}
</style>
