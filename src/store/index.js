import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    files:{},//上传比较的文件,属性：fileMsg存放要后台请求的工作码，id/fileContent存对比的文件对象
  },
  getters: {
  },
  mutations: {
    // 更改要比较的文件的id和工作码等状态
    CHANGE(state,code){
      state.files.fileMsg = code;
      console.log("封好的对象是：",state.files);
    }
  },
  actions: {
    change(context,val){
      context.state.files.fileContent = val;
      // 请求工作码和id,给state的files的属性fileMsg
      axios.get('http://buchitang.top:8081/compare/getWorkCode').then(
        res=>{
          console.log("请求的工作码是：",res.data);
          context.commit('CHANGE',res.data);
        }
      )
    }
  },
  modules: {
  }
})
