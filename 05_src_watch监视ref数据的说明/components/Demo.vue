<template>
  <h2>当前求和为：{{ sum }}</h2>
  <button @click="sum++">点我加一</button>
  <hr />
  <h2>当前信息为: {{ msg }}</h2>
  <button @click="msg += '!'">点我加!</button>
  <hr />
  <h2>姓名：{{ person.name }}</h2>
  <h2>年龄：{{ person.age }}</h2>
  <button @click="person.name += '~'">修改姓名</button>
  <button @click="person.age++">增长年龄</button>
</template>

<script>
import { ref, watch, reactive } from "vue";
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

    // 此处会监听refImpl的属性变化，不需要.value
    watch(sum, (newValue, oldValue) => {
      console.log('sum改变了');
    })

    // person是个refImpl，由于内部调用reactive其value为proxy对象，需开启deep为true监视内部属性变化
    watch(person, (newValue, oldValue) => {
      console.log('perosn改变了');
    },{deep: true})

    return {
      sum,
      msg,
      person,
    };
  },
};
</script>
<style scoped>
</style>