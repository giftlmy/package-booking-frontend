import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {
    createPackage(context,value){
      const url = "http://localhost:8080/packages";
          axios.post(url,value).then(function(response){
             console.log("成功创建")
          }).catch(function(error){
             console.log(error.response);
          });

    }
  }
})
