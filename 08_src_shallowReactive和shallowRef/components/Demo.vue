<template>
  <h3>x.y的值 {{ x.y }}</h3>
  <button @click="x.y++">点我+1</button>
  <button @click="x={y:888}">点我修改x</button>
  <hr />
  <h3>{{ person }}</h3>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h2>薪资：{{ job.j1.salary }}</h2>
  <button @click="name += '~'">修改姓名</button>
  <button @click="age++">增长年龄</button>
  <button @click="job={j1:{salary: 888}}">增加薪资</button>
</template>

<script>
import { toRef, reactive, toRefs, shallowReactive, shallowRef, ref } from "vue";
export default {
  name: "Demo",
  setup(props, context) {
    let person = shallowReactive({
      name: "张三",
      age: 18,
      job: {
        j1: {
          salary: 20,
        },
      },
    });
    // let person = reactive({
    //   name: "张三",
    //   age: 18,
    //   job: {
    //     j1: {
    //       salary: 20,
    //     },
    //   },
    // });
    // let x = ref({
    //   y: 1
    // })
    let x = shallowRef({
      y: 1
    })
    return {
      person,
      ...toRefs(person),
      x
    };
  },
};
</script>
<style scoped>
</style>