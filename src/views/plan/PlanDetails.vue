<template>
    <div class="plandetails">
        计划详情
    </div>
</template>
<script>
import { reactive, toRefs } from 'vue';
export default {
    name: "planDetails",
    components: {
    },
    setup() {
        const state = reactive({
        })
        return {
            ...toRefs(state),
        }
    }
};
</script>
<style>
.plandetails {
    width: 100%;
    padding: 15px;
    background-color: rgb(245, 245, 245);
}
</style>