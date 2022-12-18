<template>
    <a-drawer :visible="CQvisible" class="drawerStyle CheckQue" placement="right" width="40%"
        @after-visible-change="afterVisibleChange">
        <div class="drawerMain">
            <div class="drawerHeader">
                <div class="headerTitle">查看答卷</div>
                <img style="width:25px;height:25px;cursor:pointer" src="../../assets/images/common/close.png"
                    @click="closeDrawer" />
            </div>
        </div>
    </a-drawer>
</template>

<script>
import { toRefs, reactive } from 'vue';
export default {
    name: "CheckWork",
    props: {
        CQvisible: {
            type: Boolean,
            default: false,
        },
    },
    setup(props, ctx) {
        const state = reactive({
        })

        const closeDrawer = () => {
            ctx.emit("update:CQvisible", false)
        }
        const afterVisibleChange = () => {
        }
        return {
            ...toRefs(state),
            closeDrawer,
            afterVisibleChange,
        }
    }
};
</script>
<style>
.CheckQue .drawerMain {
    min-width: 400px;
    margin: 0px 32px 0px 32px;
    display: flex;
    flex-direction: column;
}

.CheckQue .drawerMain .drawerHeader {
    height: 73px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e8e8e8;
    padding-bottom: 20px;
}
</style>