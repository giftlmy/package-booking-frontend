import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    packages:[]

  },
  getters: {
    getpackages:function(state){
      return state.packages
    }
  },
 mutations: {
    setpackages(state,data){     
      state.packages=data
    }
  },
  actions: {
    createPackage(context,value){
      const url = "http://localhost:8080/packages";
          axios.post(url,value).then(function(response){
             console.log("成功创建")
          }).catch(function(error){
             console.log(error.response);
          });

    },
    getPackages(context){
      const url = "http://localhost:8080/packages";
      axios.get(url).then(function(response){
       
        context.commit('setpackages',response.data)
      }).catch(function(error){
        console.log(error.response);
      });

    }
  }
})
