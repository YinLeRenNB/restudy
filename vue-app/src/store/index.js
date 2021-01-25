import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    curMenu:{
      name:'电影',
      bgColor:'grey',
    }
  },
  mutations: {
    setCurMenu(state,menu){
      state.curMenu = menu;
    }
  },
  actions: {
  },
  modules: {
  }
})
