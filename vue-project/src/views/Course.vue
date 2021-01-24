<template>
  <div>
    <h1>课程页面</h1>
    <router-link to="/fe">前端</router-link>
    <span> | </span>
    <router-link to="/rd">后端</router-link>

    <transition name="bounce" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>



<script>
export default {
  name: "course",
};
</script>

<style lang="scss" scoped>
a {
  font-weight: bold;
  color: #2c3e50;

  &.router-link-exact-active {
    color: #42b983;
  }
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>>

