<template>
  <div>
    <button @click="show = true">点击我弹窗</button>
    <teleport to="body">
      <div class="mask" v-if="show">
        <div class="dialog">
          <h3>1111</h3>
          <h3>1111</h3>
          <h3>1111</h3>
          <button @click="show = false">点击关闭</button>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "MyDialog",
  setup() {
    let show = ref(false);
    return {
      show,
    };
  },
};
</script>
<style scoped>
.mask {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
}
.dialog {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>