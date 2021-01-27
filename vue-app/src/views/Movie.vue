<template>
  <div>
    <ul>
      <li @click="goDetail(movie.id)" class="movie-item" v-for="movie in movieList" :key="movie.id">
        <div class="img-box">
          <img
            :src="'https://images.weserv.nl/?url=' + movie.cover.url"
            alt=""
          />
        </div>
        <div class="content">
          <h3>{{ movie.title }}</h3>
          <p>{{ movie.info }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "movie",
  created() {
    this.getData();
  },
  mounted() {
    this.lazyload();
  },
  data() {
    return {
      movieList: [],
      start: 0,
      isFinish: true,
    };
  },
  methods: {
    getData() {
      if (this.isFinish) {
        this.isFinish = false;
        this.axios
          .get(
            "https://bird.ioliu.cn/v2?url=https://m.douban.com/rexxar/api/v2/subject_collection/tv_domestic/items",
            {
              params: {
                start: this.start,
                count: 10,
              },
            }
          )
          .then((res) => {
            this.movieList = [
              ...this.movieList,
              ...res.data.subject_collection_items,
            ];
            this.isFinish = true;
            console.log(res.data);

          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    lazyload() {
      // 页面的高度
      let htmlDom = document.documentElement;
      let fullH = 0;
      // 设备的高度
      let deviceH = htmlDom.clientHeight;
      // 滚动出去的距离
      let scrollT = 0;
      window.onscroll = () => {
        fullH = htmlDom.offsetHeight;
        scrollT = htmlDom.scrollTop;
        // 滚动到底部
        if (scrollT + deviceH > fullH - 10) {
          console.log("滚动到底部了");
          if (this.start < 40) {
            // 请求下一页数据
            this.start += 10;
            this.getData();
          }
        }
      };
    },
    goDetail(id){
      this.$router.push('/movieDeatil/' + id);
    },
  },
};
</script>

<style lang="scss" scoped>
.movie-item {
  display: flex;
  padding: 0.2rem 0.2rem;
  border-bottom: 1px solid #ccc;
  .img-box {
    flex: 3;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .content {
    flex: 5;
    text-align: center;
    display: flex;
    padding: 0.8rem;
    flex-direction: column;
    justify-content: space-between;
    h3 {
      font-weight: bold;
      margin-bottom: 30px;
    }
  }
}
</style>