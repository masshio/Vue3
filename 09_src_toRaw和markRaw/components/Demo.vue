<template>
  <h3>
    {{school}}
  </h3>
  <hr />
  <h3>{{ person }}</h3>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h2>薪资：{{ job.j1.salary }}</h2>
  <h2 v-show="person.car"> {{person.car}} </h2>
  <button @click="name += '~'">修改姓名</button>
  <button @click="age++">增长年龄</button>
  <button @click="job={j1:{salary: 888}}">增加薪资</button>
  <br>
  <button @click="addCar">添加车</button>
  <button @click="person.car.name+='!'">换车名</button>
  <button @click="person.car.price++">加价格</button>
  <hr>
  <button @click="showRawPerson">点击查看Raw</button>
</template>

<script>
import { toRef, reactive, toRefs, ref, toRaw, markRaw } from "vue";
export default {
  name: "Demo",
  props:['school'],
  setup(props, context) {
    let person = reactive({
      name: "张三",
      age: 18,
      job: {
        j1: {
          salary: 20,
        },
      }
    });
    let sum = ref(0);
    function showRawPerson() {
      // 将响应式数据转成原始对象
      let p = toRaw(person);
      console.log(p);

      // 只能对reactive对象使用
      let rsum = toRaw(sum)
      console.log(rsum);
    }

    function addCar() {
      let car = {
        name: '奔驰',
        price: 60
      }
      // 这是响应式的
      // person.car = car

      // 这是非响应式的
      person.car = markRaw(car);
    }
    return {
      person,
      ...toRefs(person),
      showRawPerson,
      addCar
    };
  },
};
</script>
<style scoped>
</style>