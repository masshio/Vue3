<template>
  <div>x:{{ point.x }}</div>
  <div>y:{{ point.y }}</div>
</template>

<script>
import { ref, watch, reactive } from "vue";
import getPoint from "../hook/usePoint";
export default {
  name: "Demo",
  setup(props, context) {
    let sum = ref(0);
    let msg = ref("你好啊");
    let person = ref({
      name: "张三",
      age: 18,
      job: {
        j1: {
          salary: 20,
        },
      },
    });
    let point = getPoint();
    return {
      sum,
      msg,
      person,
      point,
    };
  },
};
</script>
<style scoped>
div{
  height: 100vh;
}
</style>