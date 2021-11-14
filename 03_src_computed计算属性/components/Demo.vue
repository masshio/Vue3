<template>
  <div>一个人的信息</div>
  姓名： <input type="text" v-model="person.firstName" /> 年龄：
  <input type="text" v-model="person.lastName" />
  <div>全名：{{ person.fullName }}</div>
  全名：<input type="text" v-model="person.fullName"/>
</template>

<script>
import { reactive, computed } from "vue";
export default {
  name: "Demo",
  setup(props, context) {
    let person = reactive({
      firstName: "张",
      lastName: "三",
      age: 18,
      sex: "男",
    });
    // 计算属性-简写（没有考虑计算属性被修改的情况）
    // person.fullName = computed(() => {
    //   return person.firstName + "-" + person.lastName;
    // });

    // 计算属性-完整写法（考虑读和写）
    person.fullName = computed({
        get() {
            return person.firstName + "-" + person.lastName;
        },
        set(value) {
            let arr = value.split('-');
            person.firstName = arr[0];
            person.lastName = arr[1];
        }
    })
    return {
      person,
    };
  },
};
</script>
<style scoped>
</style>