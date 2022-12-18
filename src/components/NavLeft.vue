<template>
    <div id="navleft" :style="{
        width: packup ? '100px' : '208px',
        'min-height': screenHeight - 80 + 'px',
    }">
        <div style="display: flex; justify-content: flex-end">
            <img class="packup" src="@/assets/images/navleft/packup.png" @click="packUp"
                :style="{ 'margin-right': packup ? '36px' : '14px' }" />
        </div>
        <div style="width: 100%; margin-top: 26px" :style="{ display: packup ? 'none' : 'block' }">
            <a-menu :open-keys="openKeys" :selectedKeys="selectedKeys" style="width: 208px" mode="inline"
                @openChange="onOpenChange" @select="selectItem">
                <a-menu-item key="sub1">
                    <div class="imgBox">
                        <img style="width: 20px; height: 18px" src="@/assets/images/navleft/report.png" />
                    </div>
                    <router-link to="/homepage">首页</router-link>
                </a-menu-item>
                <a-menu-item key="sub2">
                    <div class="imgBox">
                        <img style="width: 20px; height: 18px" src="@/assets/images/navleft/users.png" />
                    </div>
                    <router-link to="/usermanage">用户管理</router-link>
                </a-menu-item>
                <a-sub-menu key="sub3">
                    <template #icon>
                        <div class="imgBox">
                            <img style="width: 18px; height: 15px" src="@/assets/images/navleft/plan.png" />
                        </div>
                    </template>
                    <template #title>计划</template>
                    <a-menu-item key="sub3-1">
                        <span :class="{
                            circleActive: selectedKeys[0] === 'sub3-1' ? true : false,
                            circle: selectedKeys[0] === 'sub3-1' ? false : true,
                        }"></span>
                        <router-link to="/plantable">计划表</router-link>
                    </a-menu-item>
                    <a-menu-item key="sub3-2">
                        <span :class="{
                            circleActive: selectedKeys[0] === 'sub3-2' ? true : false,
                            circle: selectedKeys[0] === 'sub3-2' ? false : true,
                        }"></span>
                        <router-link to="/plandetails">计划详情</router-link>
                    </a-menu-item>
                </a-sub-menu>
            </a-menu>
        </div>
    </div>
</template>
<script>
import { defineComponent, reactive, toRefs, onMounted } from 'vue';
export default defineComponent({
    setup() {
        const state = reactive({
            packup: false,
            screenHeight: document.body.clientHeight, // 屏幕高度
            rootSubmenuKeys: [
                "sub1",
                "sub2",
                "sub3",
            ],
            openKeys: localStorage.getItem("openKeys")
                ? JSON.parse(localStorage.getItem("openKeys"))
                : ["sub1"], //默认打开以及打开的一级导航
            selectedKeys: localStorage.getItem("selectedKeys")
                ? JSON.parse(localStorage.getItem("selectedKeys"))
                : ["sub1"], //默认选择以及选择的二级导航
            keysList: [
                {
                    href: "/homepage",
                    openKeys: "sub1",
                    selectedKeys: "sub1",
                    pagename: "首页",
                },
                {
                    href: "/usermanage",
                    openKeys: "sub2",
                    selectedKeys: "sub2",
                    pagename: "用户管理",
                },
                {
                    href: "/plan",
                    openKeys: "sub3",
                    selectedKeys: "sub3-1",
                    pagename: "计划",
                },
                {
                    href: "/plan",
                    openKeys: "sub3",
                    selectedKeys: "sub3-1",
                    pagename: "计划表",
                },
                {
                    href: "/plandetails",
                    openKeys: "sub3",
                    selectedKeys: "sub3-2",
                    pagename: "计划详情",
                }
            ]
        });
        const packUp = () => {
            state.packup = !state.packup
        }
        const selectItem = (e) => {
            console.log('------------执行了selectItem---------------', e);
            let arr = state.keysList;
            arr.map((value) => {
                if (e.key === value.selectedKeys) {
                    localStorage.setItem("openKeys", JSON.stringify([value.openKeys]));
                    localStorage.setItem(
                        "selectedKeys",
                        JSON.stringify([value.selectedKeys])
                    );
                    state.openKeys = [value.openKeys];
                    state.selectedKeys = [value.selectedKeys];
                }
            })
        }
        const onOpenChange = (openKeys) => {
            console.log('------------执行了onOpenChange---------------', openKeys);
            const latestOpenKey = openKeys.find(
                (key) => state.openKeys.indexOf(key) === -1
            );
            if (state.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
                state.openKeys = openKeys;
            } else {
                state.openKeys = latestOpenKey ? [latestOpenKey] : [];
            }
        }
        onMounted(() => {
            // console.log('state.screenHeight', state.screenHeight);
        })
        return {
            ...toRefs(state),
            packUp,
            selectItem,
            onOpenChange,
        };
    },
});
</script>
<style>
#navleft {
    width: 208px;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    background: linear-gradient(0deg, rgb(255, 223, 228), rgb(155, 250, 242));
    flex-shrink: 0;
}

#navleft .packup {
    width: 19px;
    height: 15px;
    margin-top: 23px;
    margin-right: 14px;
    cursor: pointer;
}

/* 修改导航栏背景颜色 */
.ant-menu {
    background-color: rgba(155, 250, 242, 0) !important;
    border: none;
    box-shadow: none;
}

/* 图标和字放在一行 */
.ant-menu-title-content {
    display: flex;
    align-items: center;
}

.packupMenu .ant-menu-title-content {
    display: flex;
    align-items: center;
    justify-content: center;
}

/* 修改导航文字颜色 */
.ant-menu-title-content {
    padding: 0px !important;
    color: rgb(255, 255, 255) !important;
    font-size: 16px;
    font-weight: 400;
    line-height: 36px;
    border-right: 3px solid rgba(255, 255, 255, 0);
    margin-left: 0 !important;
}

.ant-menu-item a,
.ant-menu-item a:hover {
    color: rgb(255, 255, 255) !important;
    font-size: 16px;
    font-weight: 400;
    line-height: 36px;
}

/* 修改二级导航背景色 */
.ant-menu-sub.ant-menu-inline {
    background-color: rgba(155, 250, 242, 0) !important;
    border: none;
    box-shadow: none;
}

/* 修改左侧padding */
.ant-menu-item,
.ant-menu-submenu-title {
    padding-left: 27px !important;
    height: 49px !important;
    line-height: 49px !important;
    margin: 0px !important;
}

/* 左侧图标 */
.imgBox {
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 15px;
}

.ant-menu-submenu-arrow {
    color: rgba(255, 255, 255, 1) !important;
    right: 14px !important;
}

/* 划上背景 */
.ant-menu-item-active {
    background: rgba(236, 245, 255, 0.7) !important;
    border-right: 3px solid rgba(255, 255, 255, 1);
}

/* 选中背景 */
.ant-menu-item-selected {
    background: rgba(236, 245, 255, 0.2) !important;
    border-right: 3px solid rgba(255, 255, 255, 1);
}

.ant-menu-vertical .ant-menu-item::after,
.ant-menu-vertical-left .ant-menu-item::after,
.ant-menu-vertical-right .ant-menu-item::after,
.ant-menu-inline .ant-menu-item::after {
    border-right: 0px;
}

.circle {
    width: 10px;
    height: 10px;
    border-radius: 5px;
    border: 2px solid rgb(255, 255, 255);
    margin-left: 24px;
    margin-right: 18px;
    display: inline-block;
}

.circleActive {
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: rgb(255, 255, 255);
    margin-left: 24px;
    margin-right: 18px;
    display: inline-block;
}
</style>