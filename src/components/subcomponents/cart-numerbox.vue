<template>
  <div class="mui-numbox" data-numbox-min="1">
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input class="mui-input-numbox" type="number" v-model="count" ref="numbox" @change="countChange" readonly/>
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>
</template>

<script>
import mui from "../../lib/mui-master/dist/js/mui.min.js";

export default {
  props: ["maxcount","count","goodsid"],
  data() {
    return {
    };
  },
  mounted() {
    mui(".mui-numbox").numbox();
    
  },
  methods: {
    countChange() {
      // 当购物车中 当前商品 数量发生变化时，
      this.$emit("cb", {count:this.$refs.numbox.value, id: this.goodsid });

      mui(".mui-numbox")
      .numbox()
      .setOption('max',this.maxcount);
    }
  },
};
</script>

<style lang="less" scoped>
</style>
