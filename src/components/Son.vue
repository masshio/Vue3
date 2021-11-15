<template>
  <div class="son">
      我是son{{data}}
      <grand-son></grand-son>
  </div>
</template>

<script>
import GrandSon from "./GrandSon";
import { inject, reactive, toRefs } from "vue";
export default {
  name: "App",
  setup() {
    let data = inject("data");
    return {
      data,
    };
  },
  components: {
    GrandSon,
  },
};
</script>

<style>
.son {
  background: yellow;
  padding: 20px;
}
</style>
