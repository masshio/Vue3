<template>
  <Demo :school="true" sc="asd" @test="test"></Demo>
</template>

<script>
import {h,ref, reactive} from 'vue'
import Demo from './components/Demo.vue'
export default {
  name: 'App',
  components: {
    Demo
  },
  setup() {
    const data = {
    }
    function test() {
      console.log('test');
    }
    return {
      test
    }
  }
}
</script>

<style>

</style>
