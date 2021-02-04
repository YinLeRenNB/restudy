<template>
    <footer>
        <router-link to="/">电影</router-link>
        <router-link to="/book">书籍</router-link>
        <router-link to="/music">音乐</router-link>
        <router-link to="/chat">聊天</router-link>

    </footer>
</template>

<script>
    export default {
        name:'comFooter',
    }
</script>

<style lang="scss" scoped>
footer{
    background:grey;
    height:1rem;
    line-height:1rem;
    color: #fff;
    text-align: center;
    width: 100%;
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: space-around;
}


</style>