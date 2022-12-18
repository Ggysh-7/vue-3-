<template>
    <div class="generalview">
        <div class="header">
            <img src="@/assets/images/plan/basketballlove.gif" alt="">
        </div>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue';
export default {
    name: "generalView",
    components: {},
    props: {},
    setup() {
        const state = reactive({

        })
        return {
            ...toRefs(state)
        }
    }
};
</script>
<style>
.generalview {
    width: 100%;
    padding: 8px;
}

.generalview .header {
    width: 1000px;
}
</style>