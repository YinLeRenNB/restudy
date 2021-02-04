<template>
    <header>
        <span id="back">&lt;</span>
        <span id="home">首页</span>
        标题
    </header>
</template>

<script>
    export default {
        name:'comHeader',
    }
</script>

<style lang="scss" scoped>
header{
    background:grey;
    height:1rem;
    line-height:1rem;
    color:white;
    position:relative;
    text-align: center;

}
#back{
    position:absolute;
    left:15px;
}
#home{
    position: absolute;
    left: 40px;
}

</style>