<template>
  <div class="cmt-container">
    <h1>发表评论</h1>
    <hr>
    <textarea maxlength="120" placeholder="发表评论（最多120字数）" rows="5"></textarea>

    <mt-button type="primary" size="large" @click="addComment">发表评论</mt-button>

    <div class="cmt-lists">
      <div class="cmt-item">
        <div class="cmt-title">
          <p>
            <span>第n楼</span>
            <span>评论者</span>
            <span>评论时间</span>
          </p>
        </div>
        <div class="cmt-body">哈哈哈</div>
      </div>
    </div>
    <div class="cmt-lists">
      <div class="cmt-item">
        <div class="cmt-title">
          <p>
            <span>第n楼</span>
            <span>评论者</span>
            <span>评论时间</span>
          </p>
        </div>
        <div class="cmt-body">哈哈哈</div>
      </div>
    </div>
    <div class="cmt-lists">
      <div class="cmt-item">
        <div class="cmt-title">
          <p>
            <span>第n楼</span>
            <span>评论者</span>
            <span>评论时间</span>
          </p>
        </div>
        <div class="cmt-body">哈哈哈</div>
      </div>
    </div>

    <mt-button type="danger" size="large" plain>加载更多</mt-button>
  </div>
</template>

<script>
import { Toast } from 'mint-ui';
export default {
    data(){
        return{

        }
    },
    methods: {
        addComment(){
            Toast({
                message: '发表成功',
                position: 'bottom',
                duration: 2000
            })
        }
    }
};
</script>

<style lang="less" scoped>
.cmt-container {
  margin: 10px 0;
  h1 {
    font-size: 16px;
  }
  textarea {
    font-size: 14px;
    margin: 0;
  }

  .cmt-lists {
    margin: 6px 0;
    font-size: 13px;

    .cmt-item {
      .cmt-title {
        p{

            background-color: rgb(206, 198, 198);
            line-height: 20px;
            color: black;
        }
        span{
            margin: 0 6px;
        }
      }
      .cmt-body{
          line-height: 25px;
          text-indent: 2em;
      }
    }
  }
}
</style>

