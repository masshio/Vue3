<template>
  <div class="app">
    <div>我是app</div>
    <son></son>
  </div>
</template>

<script>
import Son from './components/Son'
import {provide, reactive, toRefs} from 'vue'
export default {
  name: "App",
  setup() {
    const data = reactive({
      x: 1,
      y: 2
    })
    provide('data', data)
    return{
      ...toRefs(data)
    }
  },
  components: {
    Son
  }
};
</script>

<style>
  .app {
    background: yellowgreen;
    padding: 20px;
  }
</style>
