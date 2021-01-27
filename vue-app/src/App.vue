<template>
  <div id="app">
    <ComHeader></ComHeader>
    <router-view class="box" />
    <ComFooter></ComFooter>
  </div>
</template>

<script>
import ComHeader from "./components/ComHeader";
import ComFooter from "@/components/ComFooter";
export default {
  components: {
    ComHeader,
    ComFooter,
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  .box{
    margin-bottom: 1rem;
    margin-top: 1rem;
  }
}

a {
  font-weight: bold;
  color: #fff;

  &.router-link-exact-active {
    color: #42b983;
  }
}

</style>
