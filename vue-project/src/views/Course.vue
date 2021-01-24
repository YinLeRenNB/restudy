<template>
    <div>
        <h1>课程页面</h1>
        <router-link to="/fe">前端</router-link>
        <span> | </span>
        <router-link to="/rd">后端</router-link>
        <router-view></router-view>
    </div>
</template>



<script>
export default {
    name:'course'
}
</script>

<style lang="scss" scoped>
a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
</style>>

