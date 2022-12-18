<template>
    <div class="plantablemanage">
        <div class="header">
            管理组件
        </div>
        <div class="body">
            <a-botton @click="opQrCode"
                style="border:1px solid black;border-radius: 4px;padding:5px 10px;cursor: pointer; margin-right: 8px;">
                点我弹窗
            </a-botton>
            <a-botton @click="opCheckQue"
                style="border:1px solid black;border-radius: 4px;padding:5px 10px;cursor: pointer;">
                点我抽屉
            </a-botton>
        </div>
    </div>


    <!-- 二维码弹窗 -->
    <qr-code v-model:codevisible="codevisible" />
    <!-- 二维码弹窗 -->
    <!-- 查看答卷抽屉 -->
    <check-que v-model:CQvisible="CQvisible" />
    <!-- 查看答卷抽屉 -->
</template>

<script>
import QrCode from "./QrCode.vue"
import CheckQue from "@/components/drawers/CheckQue.vue"
import { reactive, toRefs } from 'vue';
export default {
    name: "planTableManage",
    components: {
        QrCode,
        CheckQue,
    },
    props: {},
    setup() {
        const state = reactive({
            codevisible: false,//二维码弹窗
            CQvisible: false, //查看答卷抽屉
        })
        const opQrCode = () => {
            state.codevisible = true
        }
        const opCheckQue = () => {
            state.CQvisible = true
        }
        return {
            ...toRefs(state),
            opQrCode,
            opCheckQue,
        }
    }
};
</script>
<style>
.plantablemanage {
    width: 100%;
}

.plantablemanage .header {
    background-color: red;
    width: 1200px;
}

.plantablemanage .body {
    margin: 20px;
}
</style>