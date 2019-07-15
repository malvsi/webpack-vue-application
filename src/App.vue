<template>
  <div>
    <!-- <mt-header fixed title="Webpack·Vue项目"></mt-header> -->
    <header class="mui-bar mui-bar-nav">
      <span slot="left" v-show="flag" @click="goback">
        <mt-button icon="back">返回</mt-button>
      </span>
      <h1 class="mui-title">Webpack·Vue项目</h1>
    </header>

    <div class="app-container">
      <transition>
        <router-view></router-view>
      </transition>

      <nav class="mui-bar mui-bar-tab">
        <router-link to="/home" class="mui-tab-item">
          <span class="mui-icon mui-icon-home"></span>
          <span class="mui-tab-label">首页</span>
        </router-link>

        <router-link to="/member" class="mui-tab-item">
          <span class="mui-icon mui-icon-contact"></span>
          <span class="mui-tab-label">会员</span>
        </router-link>

        <router-link to="/cart" class="mui-tab-item">
          <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
            <span class="mui-badge" id="badge">{{ this.$store.getters.getAllCount }}</span>
          </span>
          <span class="mui-tab-label">购物车</span>
        </router-link>

        <router-link to="/search" class="mui-tab-item">
          <span class="mui-icon mui-icon-search"></span>
          <span class="mui-tab-label">搜索</span>
        </router-link>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return{
      flag: false,
    }
  },
  created() {
    this.flag = this.$route.path === '/home' ? false : true;
  },
  methods: {
    goback() {
      this.$router.go(-1);
    }
  },
  watch: {
    "$route.path": function(nVal) {
        if(nVal === "/home") {
          this.flag = false;
        }else{
          this.flag = true;
        }
    }
  }
};
</script>

<style lang="less" scoped>
.app-container {
  padding-top: 40px;
  padding-bottom: 50px;
  overflow-x: hidden;
}
.mui-bar-nav {
    background-color: skyblue;
  z-index: 99;

  .mint-button--normal{
    background-color: skyblue;
    color: black;
  }
}

.v-enter {
  opacity: 0;
  transform: translateX(100%);
}

.v-leave-to {
  transform: translateX(-100%);
  position: absolute;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}
</style>
