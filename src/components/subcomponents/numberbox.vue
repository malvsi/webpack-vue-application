<template>
  <div class="mui-content-padded">
    购买数量:
    <div class="mui-numbox" data-numbox-min="1">
      <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
      <input id="test" class="mui-input-numbox" type="number" value="1" ref="numbox" @change="countChange"/>
      <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
  </div>
</template>

<script>
import mui from '../../lib/mui-master/dist/js/mui.min.js';

export default {
  props: ['maxcount'],
  data() {
    return{
    }
  },
  mounted() {
    mui(".mui-numbox").numbox();
  },
  methods: {
    countChange() {
      this.$emit('cb',parseInt(this.$refs.numbox.value));
    }
  },
  watch: {
    'maxcount': function(nVal,oVal) {
        mui(".mui-numbox").numbox().setOption('max',nVal);
    }
  }
};
</script>

<style lang="less" scoped>
</style>
