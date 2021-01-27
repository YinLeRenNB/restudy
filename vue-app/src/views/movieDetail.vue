<template>
  <div class="content">
    <div class="title">
      <h2>{{ this.movieObj.title }}</h2>
    </div>
    <div id="img-box">
      <img :src="'https://images.weserv.nl/?url=' + this.movieObj.img" alt="" />
    </div>
    <div class="info">
      <p>{{ this.movieObj.info }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "movieDetail",
  created() {
    this.getData();
  },
  data() {
    return {
      movieObj: {
        img: "",
        title: "",
        info: "",
      },
    };
  },
  methods: {
    getData() {
      this.axios
        .get(
          "https://bird.ioliu.cn/v2?url=https://m.douban.com/rexxar/api/v2/tv/" +
            this.$route.params.id
        )
        .then((res) => {
          console.log(res.data);
          this.movieObj.img = res.data.cover_url;
          this.movieObj.title = res.data.title;
          this.movieObj.info = res.data.intro;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.title {
  h2 {
    text-align: center;
  }
}
#img-box {
    position: relative;
    height: 300px;
    width: 100%;
  img {
    width: 200px;
    height: 300px;
    position: absolute;
    left: 25%;
  }
}
</style>