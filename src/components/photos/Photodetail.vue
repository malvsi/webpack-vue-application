<template>
  <div class="photodetail-container">
    <h1 class="title">图片详情页-标题</h1>
    <p class="subtitle">
      <span>发表时间：</span>
      <span>点击： 次</span>
    </p>
    <hr />

    <!-- 缩略图 -->
    <div class="thumbnail">
      <vue-preview
      :list="list"
      :thumbImageStyle="{width: '80px', height: '80px', margin: '6px', boxShadow: '0 0 6px black'}"
      :previewBoxStyle="{border: '1px solid #eee'}"
      :tapToClose="true"
      @close="closeHandler"
      @destroy="destroyHandler"
    />
    </div>

    <!-- 图片详情介绍 -->
    <div class="photoinfo-content">
              <h1>App updated. Recompiling...</h1>
              <p>This is one-sided shadow effect! Shadow is no longer a real shadow projection, shadow sharpness diffuses outward, more shadow effect!Box-shadow: -2px 0 3px-1px green, //left shadow 0-2px...</p>
              <p>this is a picture token on the internet</p>
    </div>

    <!-- 评论子组件 -->
    <comment></comment>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.imgid,
      list: [] //缩略图列表
    };
  },
  created() {
    this.getPhotoInfo();
  },
  methods: {
    getPhotoInfo() {
      for (let i = 0; i < 5; i++) {
        this.list.push({
          src: require("../../images/img" + i + ".JPG"),
          w: 600,
          h: 600
        });
      }
    },
    closeHandler() {
      console.log('closeHandler')
    },
    // 完全关闭之后，调用这个函数清理资源
    destroyHandler() {
      console.log('destroyHandler')
    }
  }
};
</script>

<style lang="less" scoped>
.photodetail-container {
    .title{
        text-align: center;
        font-size: 14px;
        color: skyblue;
        margin: 16px 0;
    }

    .subtitle{
        margin: 0 10px;
        font-size: 13px;
        display: flex;
        justify-content: space-between;
    }

    .photoinfo-content{
        margin: 14px;
        h1,p{
            font-size: 13px;
        }
        p{
            color: black;
        }
    }

}
</style>
