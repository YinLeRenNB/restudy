<template>
  <header :style="{backgroundColor: curMenu.bgColor}">
    <span id="back">&lt;</span>
    <span id="name" @click="gohome">首页</span>
    {{curMenu.name}}
  </header>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState(["curMenu"]),
  },
  methods: {
    ...mapMutations(["setCurMenu"]),
    gohome(){
      this.$router.push('/');
      this.setCurMenu({
        name:'电影',
        bgColor:'grey',
      })
    }
  },
};
</script>

<style lang="scss" scoped>
header {
  height: 1rem;
  line-height: 1rem;
  text-align: center;
  background: grey;
  color: white;
  position: fixed;
  top: 0;
  width: 100%;
  span {
    position: absolute;
    left: 0;
  }
}
#back {
  position: absolute;
  left: 10px;
}
#name {
  position: absolute;
  left: 30px;
}
</style>