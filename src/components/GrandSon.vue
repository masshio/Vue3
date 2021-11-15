<template>
  <div class="grand">我是GrandSon {{data}}</div>
</template>

<script>
import { inject, reactive, toRefs } from "vue";
export default {
  name: "App",
  setup() {
    let data = inject("data");
    return {
        data
    }
  },
};
</script>

<style>
.grand {
  background:wheat;
  padding: 20px;
}
</style>
