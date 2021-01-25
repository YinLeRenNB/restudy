<template>
    <footer :style="{backgroundColor:curMenu.bgColor}">
      <div 
      v-for="menu in menuList" 
      @click="switchMenu(menu)" 
      :key="menu.path">
      <router-link :to="menu.path">{{menu.name}}</router-link> 
      </div>
    
    </footer>
</template>

<script>
    import { mapState, mapMutations } from "vuex";
    export default {
        name:'comFooter',
        computed:{
            ...mapState(["curMenu"]),
        },
        data(){
            return{
                menuList:[
                    {
                        path:'/',
                        name:'电影',
                        bgColor:'grey',
                        
                    },{
                        path:'/book',
                        name:'书籍',
                        bgColor:'#000'
                    },{
                        path:'/music',
                        name:'音乐',
                        bgColor:'rgb(57, 41, 194)'
                    },{
                        path:'/chat',
                        name:'聊天',
                        bgColor:'rgb(119, 165, 13)'
                    },
                ]
            }
        },
        methods:{
            ...mapMutations(["setCurMenu"]),
            switchMenu(menu){
                this.setCurMenu(menu)
            },
        },
    }
</script>

<style lang="scss" scoped>
    footer{
        height:1rem;
        line-height:1rem;
        text-align: center;
        background: grey;
        color: #fff;
        display: flex;
        position: absolute;
        width: 100%;
        bottom: 0;
        justify-content: space-around;
    }
</style>