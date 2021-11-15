<template>
  <div class="app">
    <div>我是app</div>
  </div>
</template>

<script>
import {isRef, isReactive, isReadonly, isProxy, reactive, ref, readonly, toRefs, shallowReactive} from 'vue'
export default {
  name: "App",
  setup() {
    const data = shallowReactive({
      x: 1,
      y: 2
    })
    const sum = ref(1);
    const rd = readonly(data)
    console.log(rd);
    console.log(isRef(sum));
    console.log(isReactive(data));
    console.log(isReadonly(rd));
    console.log(isReactive(rd));
    console.log(isProxy(rd));
    console.log(isProxy(data));

    return{
      ...toRefs(data)
    }
  },
};
</script>

<style>
  .app {
    background: yellowgreen;
    padding: 20px;
  }
</style>
