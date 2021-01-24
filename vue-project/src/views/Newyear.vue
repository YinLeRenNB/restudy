<template>
  <div>
    <h1>Happy New Year</h1>
    <button @click="goBack">后退一步</button> ｜
    <button @click="go">后退两步</button> ｜
    <button @click="goHome">回到首页</button> |
    <button @click="goPage">回到需要传参的页面</button>
  </div>
</template>

<script>
export default {
  name: "newyear",
  methods: {
    goBack() {
      this.$router.back();
    },
    go() {
      this.$router.go(-2);
    },
    goHome() {
      this.$router.push({
        path:'/'
      })
    },
    goPage(){
      this.$router.push({
        // path:'/user',
        // query:{
        //   name:'haha',
        //   id:'666'
        // }
        name:'User',
        params:{
          name:'haha',
          id:'666'
        }
      })
    }
  },
};
</script>

<style lang="scss" scoped>
</style>