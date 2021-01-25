import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // data
  state: {
    count:0,
    num:10,
  },
  getters:{
    result(state){
      return state.num * state.count;
    }
  },
  // methods 处理同步
  mutations: {
    add(){
      this.state.count++;
    },
    // 当方法需要传参时，第一个参数因为对应的为state所以需要写一个state占位
    addNum(state1,num){
      state1.count +=num;
    },
    reduce(state){
      state.count--;
    }
  },
  // methods 处理异步
  actions: {
      reduceFun(){
        setTimeout(()=>{
          this.commit('reduce')
        },1000);
      }
  },
  modules: {
  }
})
