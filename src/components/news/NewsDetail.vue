<template>
    <div class="newsdetail-container">
        <h1 class="title">新闻标题</h1>
        <p class="subtitle">
            <span>发表时间</span>
            <span>新闻来源</span>
        </p>

    <hr>
        <div class="content"></div>

        <comment></comment>
    </div>
</template>

<script>
export default {
    data() {
        return{
            id: this.$route.params.docid,
        }
    }
}
</script>

<style lang="less" scoped>
    .newsdetail-container{
        padding: 1px 4px;

        .title{
            font-size: 16px;
            color: red;
            text-align: center;
            margin: 10px;
        }

        .subtitle{
            color: skyblue;
            display: flex;
            justify-content: space-between;
        }
    }
</style>
