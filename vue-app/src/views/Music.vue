<template>
<div>
  <aplayer :audio='audio' :lrcType="0" />
</div>
</template>

<script>
import Vue from "vue";
import APlayer from "@moefe/vue-aplayer";

Vue.use(APlayer, {
  defaultCover: "https://github.com/u3u.png",
  productionTip: true,
});

export default {
  name:'music',
  created () {
    this.getData();
  },
  data(){
    return{
      audio:[],
      playList:[],
      mp3Url:'',
    }
  },
  methods:{
    getData(){
      this.axios.get('https://bird.ioliu.cn/netease/playlist?id=307343394').then((res)=>{
        this.playList = res.data.playlist.tracks;
        this.audio = this.playList.map((item,index) => {
          // map 返回新数组
          this.getSong(item.id,index); // 异步的操作不会立刻拿到结果，所以在该方法的 then 里面去修改 mp3 的 url
          return {
            name: item.name,
            artist: item.ar[0].name,
            url: this.mp3Url,
            cover:item.al.picUrl,
            id:item.id,
          }
        })
      }).catch((err)=>{
        console.log(err);
      })
    },
    getSong(id,index){
      this.axios.get('https://bird.ioliu.cn/netease/song?id=' + id).then((res)=>{
        console.log(res);
        this.audio[index].url = res.data.data.mp3.url;
        }).catch((err)=>{console.log(err);});

    }
  }
};
</script>

<style lang="scss" scoped>
</style>