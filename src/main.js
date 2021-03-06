import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import Vuex from 'vuex'
import router from "@/router/router";
import ButtonWord from "@/components/ButtonWord";
Vue.component('ButtonWord', ButtonWord);
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Vuex)
new Vue({
  render: h => h(App),
  el:'#app',
  router
})

