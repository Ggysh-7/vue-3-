<template>
    <div class="plantableset">
        <div class="header">
            设置组件
        </div>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue';
export default {
    name: "planTableSet",
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
.plantableset {
    width: 100%;
}

.plantableset .header {
    width: 1400px;
    background-color: blue;
}
</style>