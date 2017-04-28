<template>
  <div id="app">
    <v-banner :obj="obj" @childevent="childEventHandle"></v-banner>
    <v-tab></v-tab>
    <div class="content">
      <router-view></router-view>
    </div>
    <transition name="slide">
      <v-mask v-show="show" @emitClose="childClose" :obj="obj" :show="show"></v-mask>
    </transition>
    <shopping-car></shopping-car>
  </div>
</template>

<script>
import Vue from "vue"
import axios from "axios"
import banner from "./components/banner/banner"
import tab from "./components/tab/tab"
import Mask from "./components/mask/Mask"
import shoppingCar from "./components/car/shoppingCar"

export default {
  name: 'app',
  components: {
    'v-banner': banner,
    'v-tab': tab,
    'v-mask': Mask,
    shoppingCar
  },  
  data(){
    return {
      show: false,
      obj: {},
      amount: 0,
    }
  },
  mounted(){
    axios.get("/api/seller").then(response => {
      console.log(response.data.data);
      let obj = response.data.data;
      this.obj = obj;
    }).catch(error => {
      console.log(error);
    });
  },
  methods:{
    childEventHandle(name){
      this.show = true;
    },
    childClose(){
      this.show = false;
    },
  },
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  position: absolute;
  width: 100%;
  height: 100%;
  overflow-x: hidden;

  &::-webkit-scrollbar{  
        width: 0;  
        height: 0;  
        background-color: transparent;  
    }
}
.content{
  background-color: #f3f5f7;
}
</style>
