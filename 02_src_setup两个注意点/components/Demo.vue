<template>
  <div>一个人的信息</div>
  <div>姓名：{{person.name}}</div>
  <div>年龄：{{person.age}} </div>
  <button @click="test">test</button>
</template>

<script>
import { reactive } from 'vue'
export default {
    name: 'Demo',   
    props: ['school','sc'],
    emits: ['test'],
    setup(props, context) {
        console.log(props);
        console.log(context);
        let person = reactive({
            name: '张三',
            age: 18,
            sex: '男'
        })
        function test() {
            context.emit('test')
        }
        return {
            person,
            test
        }
    },
    beforeCreate() {
    }
}

</script>
<style scoped>
</style>