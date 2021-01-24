<template>
    <div>
        <h1>用户详情页面</h1>
        <!-- 第一种传参：
        <p>用户名：{{name}}</p>
        <p>ID：{{$route.query.id}}</p> 
        -->
        <p>用户名：{{name}}</p>
        <p>ID：{{$route.params.id}}</p>

    </div>
</template>

<script>
    export default {
        name:'user',
        data(){
            return{
                name: this.$route.params.name,
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>