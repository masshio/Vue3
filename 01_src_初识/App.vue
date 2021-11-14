<template>
  <div>一个人的信息</div>
  <div>姓名：{{name}}</div>
  <div>年龄：{{age}} </div>
  <button @click="sayHello">说</button>
  <button @click="change">修改</button>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
// 导入渲染函数和ref函数
import {h,ref, reactive} from 'vue'

export default {
  name: 'App',
  setup() {
    // 使用ref函数将数据变成响应式
    // let name = ref('张三')
    // let age = ref(18)
    let person = reactive({
      name: '张三',
      age: 18,
      sex: '男'
    })
    function sayHello() {
      alert("Hello")
    }
    function change() {
      // ref函数返回一个引用对象，修改值的时候要修改他的value属性
      name.value = '李四'
      age.value = 22
    }
    return {
      person,
      sayHello,
      change
    }
    // return () => h('h1', '我是渲染函数')
  }
}
</script>

<style>

</style>
