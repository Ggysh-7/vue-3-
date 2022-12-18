<template>
    <div class="plantable">
        <div class="plantablenav">
            <plan-table-nav />
        </div>
        <a-tabs class="tab" size="large" @change="changeTabs" :tabBarStyle="{ marginLeft: '10px' }">
            <a-tab-pane key="1" tab="概览">
                <general-view />
            </a-tab-pane>
            <a-tab-pane key="2" tab="管理">
                <plan-table-manage />
            </a-tab-pane>
            <a-tab-pane key="3" tab="设置">
                <plan-table-set />
            </a-tab-pane>
        </a-tabs>
    </div>

</template>
<script>
import PlanTableNav from "./components/PlanTableNav.vue"
import GeneralView from "./components/GeneralView.vue"
import PlanTableManage from "./components/PlanTableManage.vue"
import PlanTableSet from "./components/PlansetSet.vue"
import { reactive, toRefs } from 'vue';
export default {
    name: "planTable",
    components: {
        PlanTableNav,
        GeneralView,
        PlanTableManage,
        PlanTableSet,
    },
    setup() {
        const state = reactive({
        })
        const changeTabs = (e) => {
            console.log('----------------我执行了changeTabs----------------', e);
            //留着用以后可能有接口需要我点进去然后去执行接口函数渲染数据
            // if(e == 1){
            // }
            // else{
            // }
        }
        return {
            ...toRefs(state),
            changeTabs,
        }
    }
};
</script>
<style>
.plantable {
    width: 100%;
    padding: 15px;
    background-color: rgb(245, 245, 245);
}

.plantable .tab {
    background-color: rgb(255, 255, 255);
    margin: 10px 0;
    border-radius: 4px;
}
</style>