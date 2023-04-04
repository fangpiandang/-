<template>
    <div>
        <el-breadcrumb separator="/">
            <el-breadcrumb-item v-for="(item, index) in breadList" :key="index">{{
                item
            }}</el-breadcrumb-item>
        </el-breadcrumb>
        <el-card class="mt">
            <el-row>
                <el-col :span="8">
                    <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
                        <el-button slot="append" icon="el-icon-search"></el-button>
                    </el-input>
                </el-col>
                <el-col :span="9" :offset="7" class="tr">
                    <el-button type="primary" @click="visible = true">新建角色</el-button>
                    <el-button :disabled="!selected.length" @click="operate(1)">启动</el-button>
                    <el-button :disabled="!selected.length" @click="operate(2)">冻结</el-button>
                    <el-button :disabled="!selected.length" @click="operate(3)">删除</el-button>
                </el-col>
            </el-row>
        </el-card>
        <el-card class="mt">
            <el-table :data="tableData" @selection-change="handleSelectChange">
                <el-table-column type="selection" width="30"> </el-table-column>
                <el-table-column type="index" width="50" label="序号"> </el-table-column>
                <el-table-column prop="account" label="账户" width="70"> </el-table-column>
                <el-table-column prop="name" label="用户名" width="70"> </el-table-column>
                <el-table-column prop="character" label="角色" width="80"> </el-table-column>
                <el-table-column prop="remark" label="备注" width="150"> </el-table-column>
                <el-table-column prop="reason" label="原因" width="150"> </el-table-column>
                <el-table-column prop="status" label="状态" width="80">
                    <template slot-scope="scope">
                        {{ scope.row.status == 1 ? '已启用' : '未启用' }}
                    </template>
                </el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button size="mini" @click="edit(scope.row)">编辑</el-button>
                        <el-button size="mini" type="danger">删除</el-button>
                        <el-button size="mini">{{
                            scope.row.status === 1 ? '禁用' : '启用'
                        }}</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-card>
        <account-model :visible="visible" @close="visible = false"></account-model>
    </div>
</template>

<script>
import breadCrumb from '@/mixins/breadCrumb.js'
import accountModel from './accountModel.vue'
import { mapMutations } from 'vuex'
import { get } from '@/utils/http'
export default {
    mixins: [breadCrumb],
    mounted() {
        this.list()
    },
    data() {
        return {
            input3: '',
            tableData: [],
            selected: [],
            visible: false,
        }
    },
    methods: {
        ...mapMutations(['setRow']),
        list() {
            get('/all').then((res) => {
                this.tableData = res.data.list
            })
        },
        handleSelectChange(selection) {
            this.selected = selection
        },
        operate() {
            let alist = this.selected.map((item) => item.account)
            this.$notify({
                title: '操作提示',
                message: alist,
                type: 'success',
            })
        },
        edit(data) {
            this.setRow(data)
            this.visible = true
        },
    },
    components: {
        accountModel,
    },
}
</script>

<style></style>
