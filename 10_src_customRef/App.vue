<template>
  <input type="text" v-model="keyword">
  <h3> {{keyword}} </h3>
</template>

<script>
import { customRef } from "vue";
export default {
  name: "App",
  setup() {
    function myRef(value) {
      return customRef((track, trigger) => {
        let timer
        return {
          get() {
            console.log("有人读取数据了");
            track() //通知Vue跟踪value的变化（提前和get商量以下，让他认为这个value是有用的）
            return value;
          },
          set(newValue) {
            console.log("有人修改数据了", newValue);
            clearTimeout(timer)
            timer = setTimeout(() => {
              value = newValue;
              trigger() //通知Vue去重新解析模板
            }, 500)
          },
        };
      });
    }
    let keyword = myRef("value");
    return {
      keyword
    }
  },
};
</script>

<style>
</style>
