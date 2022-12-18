<template>
  <div class="homemain">
    <div class="homebody">
      <span>首页</span>
    </div>
  </div>
</template>
<script>
import { onMounted, reactive, toRefs } from "vue";

export default {
  name: "homePage",
  setup() {
    const state = reactive({
    })
    onMounted(() => {
    })
    return {
      ...toRefs(state),
    }
  }
}
</script>
<style>
.homemain {
  width: 100%;
  padding: 15px;
  background-color: rgb(245, 245, 245);
}

.homemain .homebody {
  display: flex;
  flex-direction: column;
}
</style>