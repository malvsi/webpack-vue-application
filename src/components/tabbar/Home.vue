<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item>1</mt-swipe-item>
      <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
    created() {
        // this
    }
};
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
  }
}
</style>

