// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from "vuex"
import axios from "axios"
import App from './App'
import router from './router'

Vue.use(Vuex);

Vue.prototype.$ajax = axios

const vuex_store = new Vuex.Store({
  state:{
    amount: 0
  },
  mutations:{
    addAmount(state,val){
      state.amount = state.amount + val ;
      vm.amount = state.amount;
      console.log(vm.amount);
    },
    subAmount(state,val){
      state.amount = state.amount - val;
      vm.amount = state.amount;
      console.log(vm.amount);
    }
  }
})

Vue.config.productionTip = false

let vm = new Vue({
  el: '#app',
  router,
  store: vuex_store,
  data:{
    amount: 0,
  },
  template: '<App/>',
  components: { App },
  watch:{
    amount(val){
      this.amount = vuex_store.state.amount;
    }
  }
})
