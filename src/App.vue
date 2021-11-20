<template>
  <div class="app">
    <div>我是app</div>
    <suspense>
      <template v-slot:default>
        <son></son>
      </template>
      <template v-slot:fallback>
          <div>加载中......</div>
      </template>
    </suspense>
  </div>
</template>

<script>
// import Son from './components/Son'

import { reactive, toRefs, defineAsyncComponent } from "vue";
const Son = defineAsyncComponent(() => import("./components/Son"));

export default {
  name: "App",
  setup() {
    const data = reactive({
      x: 1,
      y: 2,
    });
    return {
      ...toRefs(data),
    };
  },
  components: {
    Son,
  },
};
</script>

<style>
.app {
  background: yellowgreen;
  padding: 20px;
}
</style>
