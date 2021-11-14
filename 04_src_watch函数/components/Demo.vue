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
    let person = reactive({
      name: "张三",
      age: 18,
      job: {
        j1: {
          salary: 20,
        },
      },
    });

    // 情况一： 监视ref所定义的一个响应式数据
    watch(sum,(newValue, oldValue) => {
        console.log("sum改变", newValue, oldValue);
    },{ immediate: true });

    // 情况二： 监视ref所定义的多个响应式数据
    watch([sum, msg], (newValue, oldValue) => {
        console.log('sum或msg改变', newValue, oldValue);
    })

    /*
     情况三：监视reactive所定义的响应式数据，
      1. 注意：此处无法正确地获取oldValue
      2. 注意：强制开启了深度监视（deep配置无效）
    */
    watch(person, (newValue, oldValue) => {
      console.log("person改变", newValue, oldValue);
    }, {deep: false}); //此处的deep配置无效

    // 情况四：监视reactive所定义地一个响应式数据中的某个属性
    watch(() => person.age, (newValue, oldValue) => {
      console.log("person.age改变", newValue, oldValue);
    });

    // 情况五：监视reactive所定义的一个响应式数据中的某些属性
    watch([() => person.age, () => person.name], (newValue, oldValue) => {
      console.log("person的name或age改变", newValue, oldValue);
    });

    // 特殊情况
    watch(() => person.job, (newValue, oldValue) => {
      console.log("person.job改变", newValue, oldValue);
    }, {deep: true}); //此处由于监视的是reactive所定义的对象中的某个属性，所以deep配置有效


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