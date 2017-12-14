<template>
    <div class="nav-items">
        <ul>
            <li v-if="isShow"><el-button type="primary" class="bt-li">企业介绍</el-button></li>
            <li v-if="isShow"><el-button type="primary" class="bt-li">企业文化</el-button></li>
            <li v-if="isShow"><el-button type="primary" class="bt-li">历史</el-button></li>
            <li :class="{liwidth: navw < 50}"><el-button type="primary" class="bt-li">广场</el-button></li>
            <li :class="{liwidth: navw < 50}"><el-button type="primary" class="bt-li">首页</el-button></li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        'navw': {
            type: Number,
            default: 0
        }
    },
    computed: {
        isShow () {
            return this.navw > 50 ? true : false
        }
    },
    mounted () {
        console.log(this.navw,this.isShow)
    },
    components: {}
}
</script>
<style scoped>
    .nav-items ul {
        height: 100%;
        list-style: none;
        background-color: #000;
        opacity: .5;
        padding: 0 5%;
    }
    .nav-items li {
        float: right;
        height: 100%;
        width: 20%;
        overflow: hidden;
        display: flex;
        align-items: center;
    }
    .liwidth {
        width: 50% !important;
    }
    .bt-li {
        padding: 0;
        background: transparent;
        border: none;
        height: 100%;

    }
</style>

