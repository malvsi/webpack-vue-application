<template>
  <div>
    <mt-header fixed title="Webpack·Vue项目"></mt-header>

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
          <span class="mui-badge">0</span>
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
export default {};
</script>

<style scoped>
.app-container {
  padding-top: 40px;
  padding-bottom: 50px;
  overflow-x: hidden;
}

.v-enter{
  opacity: 0;
  transform: translateX(100%);
}

.v-leave-to{
  transform: translateX(-100%);
  position: absolute;
}

.v-enter-active,
.v-leave-active{
  transition: all 0.5s ease;
}
</style>
