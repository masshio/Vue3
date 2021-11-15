<template>
  <h3>{{person}}</h3>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h2>薪资：{{ job.j1.salary }} </h2>
  <button @click="name += '~'">修改姓名</button>
  <button @click="age++">增长年龄</button>
  <button @click="job.j1.salary++">增加薪资</button>
</template>

<script>
import { toRef, reactive, toRefs } from "vue";
export default {
  name: "Demo",
  setup(props, context) {
    let person = reactive({
      name: "张三",
      age: 18,
      job: {
        j1: {
          salary: 20,
        },
      },
    });

    const name1 = toRef(person, "name");
    console.log('###', name1);
    const name2 = person.name;
    console.log('@@@', name2);

    // 将person中的属性批量处理成ref，返回一个对象
    const x = toRefs(person);
    console.log('$$$',x);
    return {
      person,
      ...toRefs(person)
    };
  },
};
</script>
<style scoped>
</style>