<template>
  <div>
    <h1>about</h1>
  </div>
</template>

<script>
export default {
  name: "about",
  beforeRouteEnter: (to, from, next) => {
    console.log('to',to);
    console.log('from',from);
    console.log('next',next);
    next();
  },
};
</script>

<style lang="scss" scoped>
</style>