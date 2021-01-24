<template>
    <div>
        <h1>课程详情页</h1>
        <p>CourseID:{{$route.params.id}}</p>
        <p>Price:{{$route.params.price}}</p>
    </div>
</template>

<script>
    export default {
        name:'detail',
        data(){
            return{
                
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>