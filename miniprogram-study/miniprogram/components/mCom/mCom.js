// components/mCom/mCom.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    str:{
      type:String,
      value:'没有传'
    }
  },
  lifetimes:{
    attached: function(){
      console.log('页面有组件');
    },
    detached: function(){
      console.log('页面无组件');
    },
  },
  options:{
    styleIsolation:'shared',
    multipleSlots: true,
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    add(){
      this.triggerEvent('myEvent',{
        message:'hhh'
      })
    }
  }
})
