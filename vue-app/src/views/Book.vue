<template>
  <div class="book-page">
    <div class="carousel">
      <el-carousel :interval="4000" type="card" height="200px">
        <el-carousel-item v-for="item in imgList" :key="item">
          <img :src="'https://images.weserv.nl/?url=' + item" alt="" />
        </el-carousel-item>
      </el-carousel>
    </div>

    <div class="tab-list">
      <el-tabs v-model="activeName" @tab-click="changeList" :stretch="true">
        <el-tab-pane label="虚构类" name="book_fiction"></el-tab-pane>
        <el-tab-pane label="非虚构类" name="book_nonfiction"></el-tab-pane>
        <ul>
          <li v-for="book in bookList" :key="book.id" class="book-box">
            <div class="img-box">
              <img
                :src="'https://images.weserv.nl/?url=' + book.cover.url"
                alt=""
              />
            </div>
            <div class="content">
              <h3>{{ book.title }}</h3>
              <p>{{ book.info }}</p>
              <el-rate
                :value="book.rating.value / 2"
                disabled
                show-score
                text-color="#ff9900"
                score-template="{value}"
              >
              </el-rate>
            </div>
          </li>
        </ul>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: "book",
  created() {
    this.getData();
  },
  data() {
    return {
      imgList: [],
      bookList: [],
      activeName:'book_fiction',
    };
  },
  methods: {
    getData() {
      this.axios
        .get(
          "https://bird.ioliu.cn/v2?url=https://m.douban.com/rexxar/api/v2/subject_collection/"+ this.activeName +"/items?start=0&count=8"
        )
        .then((res) => {
          console.log(res);
          this.bookList = res.data.subject_collection_items;
          this.imgList = this.bookList.map((item) => {
            return item.cover.url;
          });
        });
    },
    changeList() {
      this.getData();
    },
  },
};
</script>

<style lang="scss" scoped>
.el-carousel__item {
  img {
    width: 100%;
    height: 100%;
  }
}
.book-box {
  display: flex;
  border-bottom: 1px solid grey;
  padding: 0.2rem 0;
  .img-box {
    flex: 3;
    img {
      width: 100%;
    }
  }
  .content {
    h3 {
      margin-top: .2rem;
      margin-bottom: .5rem;
      text-align: center;
      font-weight: bolder;
    }
    p{
      margin-bottom: .2rem;
    }
    flex: 5;
  }
}
</style>