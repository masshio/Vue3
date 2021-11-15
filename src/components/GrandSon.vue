<template>
  <div class="grand">
    我是GrandSon {{ data }}
    <my-dialog></my-dialog>
  </div>
  
</template>

<script>
import { inject, reactive, toRefs } from "vue";
import MyDialog from './MyDialog.vue'
export default {
  name: "App",
  setup() {
    let data = inject("data");
    return {
      data,
    };
  },
  components: {
    MyDialog
  }
};
</script>

<style>
.grand {
  background: wheat;
  padding: 20px;
}
</style>
