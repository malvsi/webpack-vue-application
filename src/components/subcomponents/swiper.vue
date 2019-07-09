<template>
    <div>
        <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in lunbotulist" :key="item.id">
          <img :src="item.img_url" :class="{'full': isfull}">
      </mt-swipe-item>
    </mt-swipe>
    </div>
</template>

<script>
export default {
    props: ['lunbotulist', "isfull"]
}
</script>

<style lang="less" scoped>
.mint-swipe {
  height: 400px;

  .mint-swipe-item {
      text-align: center;
    img {
      height: 100%;
    }
  }
}

.full{
    width: 100%;
}
</style>
