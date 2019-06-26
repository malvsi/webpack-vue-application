<template>
  <div>
    <mt-header fixed title="Webpack·Vue项目"></mt-header>

    <div class="app-container">
	<router-view></router-view>

        </div>

    <nav class="mui-bar mui-bar-tab">
		<router-link to="/home" class="mui-tab-item mui-active" href="#tabbar">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>

		<router-link to="/user" class="mui-tab-item" href="#tabbar-with-chat">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>

		<router-link to="/cart" class="mui-tab-item" href="#tabbar-with-contact">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>

		<router-link to="/search" class="mui-tab-item" href="#tabbar-with-map">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
	</nav>

  </div>
</template>

<script>
export default {};
</script>

<style scoped>
    .app-container{
        margin-top:40px;
    }

</style>
