<template>
  <Demo :school="obj"/>
  <button @click="logObj">点击</button>
</template>

<script>
import {h,ref, reactive, onBeforeUpdate} from 'vue'
import Demo from './components/Demo.vue'
export default {
  name: 'App',
  setup() {
    let obj = reactive({
      x: 1
    })
    function logObj() {
      console.log(obj);
    }
    return {
      obj,
      logObj
    }
  },
  components: {
    Demo
  }
}
</script>

<style>

</style>
