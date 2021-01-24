<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Course</router-link> |
      <router-link to="/about">About</router-link> |
      <!-- 路由传参
            1. path+query：地址栏可以看到参数，刷新页面参数不会丢失
            2. name+params：地址栏不能看到参数，刷新页面参数丢失
            3. url+params：地址栏能看到参数，刷新页面参数不丢失
       -->
      <!-- 1.<router-link :to="{path:'/user',query:{name:'wzx',id:'A01170341'}}">User</router-link> -->
      <!-- 第二种传参 -->
      <router-link :to="{name:'User',params:{name:'wzx',id:'A01170341'}}">User</router-link> |
      <!-- 第三种传参 -->
      <router-link to="/detail/100/19999">Course-Detail</router-link>



    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
