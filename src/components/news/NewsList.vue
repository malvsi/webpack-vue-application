<template>
  <div>

      <!-- v-infinite-scroll="loadMore" -->
    <ul
      class="mui-table-view mui-table-view-chevron"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="10"
    >
      <li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.imgsrc">
        <a class="mui-navigate-right">
          <img class="mui-media-object mui-pull-left" :src="item.imgsrc">
          <div class="mui-media-body">
            <h1>{{ item.title }}</h1>
            <p class="mui-ellipsis">
              <span>发表时间：{{ item.mtime }}</span>
              <span>点击：{{ item.votecount | formatNum }}次</span>
            </p>
          </div>
        </a>
      </li>
    </ul>

  </div>
</template>

<script>
import Vue from "vue";
import VueResrouce from "vue-resource";
import { Totas } from "mint-ui";
import { constants } from "crypto";
import { setTimeout } from 'timers';

Vue.use(VueResrouce);

export default {
  data() {
    return {
      newsList: [],
      previousPage: 0,
      nextPage: 20,
    };
  },
  created() {
    this.getNewsList();
  },
  filters: {
    formatNum(data) {
      var datacopy = data.toString();
      var len = datacopy.length;
      if (len == 2) {
        datacopy = "00" + datacopy;
      } else if (len == 3) {
        datacopy = "0" + datacopy;
      } else if (len == 1) {
        datacopy = "000" + datacopy;
      }
      return datacopy;
    }
  },
  methods: {
    getNewsList() {
      this.$http
        .get(
          "http://c.3g.163.com/nc/article/list/T1467284926140/" +
            this.previousPage +
            "-" +
            this.nextPage +
            ".html"
        )
        .then(result => {
          this.newsList = this.newsList.concat(result.body.T1467284926140);
        })
        .catch(err => {
          Totas("加载失败： " + err);
        });
    }
  }
};
</script>


<style lang="less" scoped>
.mui-table-view {
  li {
    h1 {
      font-size: 14px;
    }
    .mui-ellipsis {
      color: darkturquoise;
      font-size: 12px;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
