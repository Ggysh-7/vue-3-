<template>
    <div class="usermanage">
        <div class="userbody">
            <div class="usertable">
                <a-table class="tableBox" style="border: 1px solid #f2f6fe;margin: 30px 0;"
                    :row-selection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange }"
                    :columns="tableDataFunc()" :data-source="userTableData" :pagination="true" />
            </div>
        </div>
    </div>
</template>
<script>
import { reactive, toRefs } from "vue";

export default {
    name: "userManage",
    setup() {
        const state = reactive({
            tableDataTotal: 0,
            currentPage: 1,
            pageSize: 10,
            selectedRowKeys: [],
            userTableData: [
                {
                    key: 1,
                    id: 1,
                    name: 'wang',
                    vip: 'SVIP',
                    operation: '',
                },
                {
                    key: 2,
                    id: 2,
                    name: 'han',
                    vip: 'VIP',
                    operation: '',
                },
                {
                    key: 3,
                    id: 3,
                    name: 'guo',
                    vip: '普通用户',
                    operation: '',
                }
            ]
        })
        const tableDataFunc = () => {
            const columns = [
                {
                    title: "序号",
                    dataIndex: "id",
                    key: "id",
                    width: "200px",
                    align: "center",
                },
                {
                    title: "姓名",
                    dataIndex: "name",
                    key: "name",
                    width: "200px",
                    align: "center",
                },
                {
                    title: "身份",
                    dataIndex: "vip",
                    key: "vip",
                    width: "200px",
                    align: "center",
                },
                {
                    title: "操作",
                    dataIndex: "operation",
                    key: "operation",
                    width: "300px",
                    align: "center",
                }
            ]
            return columns
        }
        const tableOpe = () => {
            let arr = state.userTableData
            arr.map((value) => {
                if (value.vip == "SVIP") {
                    value.operation = (
                        <div>
                            <a-button
                                type="link"
                                disabled
                            >
                                升级
                            </a-button>
                            <a-button
                                type="link"
                                onClick={() => {
                                    console.log("点击")
                                }}
                            >
                                降级
                            </a-button>
                            <a-button
                                type="link"
                                onClick={() => {
                                }}
                            >
                                删除
                            </a-button>
                        </div>
                    )
                } else if (value.vip == "VIP") {
                    value.operation = (
                        <div>
                            <a-button
                                type="link"
                                onClick={() => {
                                    console.log("点击")
                                }}
                            >
                                升级
                            </a-button>
                            <a-button
                                type="link"
                                onClick={() => {
                                    console.log("点击")
                                }}
                            >
                                降级
                            </a-button>
                            <a-button
                                type="link"
                            >
                                删除
                            </a-button>
                        </div>
                    )
                }
                else {
                    value.operation = (
                        <div>
                            <a-button
                                type="link"
                                onClick={() => {
                                    console.log("点击")
                                }}
                            >
                                升级
                            </a-button>
                            <a-button
                                type="link"
                                disabled
                            >
                                降级
                            </a-button>
                            <a-button
                                type="link"
                                onClick={() => {
                                    console.log("点击")
                                }}
                            >
                                删除
                            </a-button>
                        </div>
                    )
                }
            })
        }
        tableOpe()
        const onSelectChange = (selectedRowKeys, selectedRows) => {
            console.log('selectedRowKeys,selectedRows', selectedRowKeys, selectedRows);
            state.selectedRowKeys = selectedRowKeys
        }
        return {
            ...toRefs(state),
            tableDataFunc,
            onSelectChange,
        }
    }
}
</script>
<style>
.usermanage {
    width: 100%;
    padding: 15px;
    background-color: rgb(245, 245, 245);
}
</style>