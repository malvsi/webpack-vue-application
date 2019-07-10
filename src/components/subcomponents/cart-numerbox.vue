<template>
  <div class="mui-numbox" data-numbox-min="1">
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input class="mui-input-numbox" type="number" value="1" ref="numbox" @change="countChange" />
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>
</template>

<script>
import mui from "../../lib/mui-master/dist/js/mui.min.js";

export default {
  props: ["maxcount"],
  data() {
    return {
      numberValue: 0,
    };
  },
  mounted() {
    // mui(".mui-numbox").numbox();
    mui(".mui-numbox")
      .numbox()
      .setValue(this.$store.getters.getGoodsCount);
      console.log("he....");
    // mui(".mui-numbox").numbox().setOption('max',this.max);

  },
  methods: {
    countChange() {
      // 当购物车中 当前商品 数量发生变化时，
      this.$emit("cb", parseInt(this.$refs.numbox.value));
    }
  },
  watch: {
  }
};
</script>

<style lang="less" scoped>
</style>
