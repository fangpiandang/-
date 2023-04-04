<template>
    <div>
        <el-breadcrumb separator="/">
            <el-breadcrumb-item v-for="(item, index) in breadList" :key="index">{{
                item
            }}</el-breadcrumb-item>
        </el-breadcrumb>
        <el-card class="mt">
            <el-row :gutter="24">
                <el-col :span="4">
                    <el-input
                        placeholder="产品名称"
                        v-model.trim="searchForm.searchValue"
                    ></el-input>
                </el-col>
                <el-col :span="4">
                    <el-select v-model="searchForm.rate" placeholder="请选择">
                        <el-option label="3.8%" value="3.8"></el-option>
                        <el-option label="3.9%" value="3.9"></el-option>
                        <el-option label="4.1%" value="4.1"></el-option>
                        <el-option label="4.3%" value="4.3"></el-option>
                    </el-select>
                </el-col>
                <el-col :span="9">
                    <el-date-picker
                        v-model="searchForm.dateRange"
                        type="daterange"
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期"
                    >
                    </el-date-picker>
                </el-col>
                <el-col :span="7">
                    <el-button type="primary" @click="search">查询</el-button>
                    <el-button type="primary">重置</el-button>
                    <span class="el-dropdown-link ml" @click="expand" v-show="!advanced">
                        展开<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <span class="el-dropdown-link ml" @click="expand" v-show="advanced">
                        收起<i class="el-icon-arrow-up el-icon--right" @click="expand"></i>
                    </span>
                </el-col>
            </el-row>
            <el-row :gutter="24" class="mt" v-show="advanced">
                <el-col :span="6">
                    <el-input placeholder="产品类别" v-model.trim="searchForm.type"></el-input
                ></el-col>
                <el-col :span="6">
                    <el-input placeholder="最高分期数" v-model.trim="searchForm.divide"></el-input
                ></el-col>
                <el-col :span="6">
                    <el-input placeholder="状态" v-model.trim="searchForm.status"></el-input
                ></el-col>
            </el-row>
        </el-card>
        <el-card class="mt">
            <el-table :data="tableData" style="width: 100%">
                <el-table-column type="index" label="序号"></el-table-column>
                <el-table-column prop="name" label="产品名称" width="90"></el-table-column>
                <el-table-column prop="type" label="产品类别" width="80"></el-table-column>
                <el-table-column prop="rate" label="利率" width="70"></el-table-column>
                <el-table-column prop="date" label="开放日期" width="100"></el-table-column>
                <el-table-column prop="status" label="状态" width="70">
                    <template slot-scope="a">
                        <el-tag size="mini" type="success" v-if="a.row.status == 1" effect="dark"
                            >已启用</el-tag
                        >
                        <el-tag size="mini" type="danger" effect="dark" v-else>已禁用</el-tag>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="highest"
                    width="80"
                    label="最高分期数（月）"
                ></el-table-column>
                <el-table-column prop="number" width="70" label="申请客户数量"></el-table-column>
                <el-table-column prop="total" width="120" label="累计签约金额"></el-table-column>
                <el-table-column prop="average" label="件均" width="60"></el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="data">
                        <el-button type="primary" size="mini" v-if="data.row.status == 2"
                            >启用</el-button
                        >
                        <el-button type="danger" size="mini" v-else>停用</el-button>
                        <el-button type="primary" size="mini" @click="detail">详情</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-card>
    </div>
</template>

<script>
import { get } from '@/utils/http'
import breadCrumb from '@/mixins/breadCrumb.js'
import moment from 'moment'
export default {
    mixins: [breadCrumb],
    data() {
        return {
            advanced: false,
            searchForm: {
                searchValue: '',
                rate: '',
                dateRange: '',
                type: '',
                divide: '',
                status: '',
            },
            tableData: [],
        }
    },
    created() {
        this.list()
    },
    methods: {
        expand() {
            this.advanced = !this.advanced
        },
        search() {
            console.log(moment(this.searchForm.dateRange[0]).format('YYYY-MM-DD'))
        },
        list() {
            get('/productList').then((res) => {
                this.tableData = res.data.list
            })
        },
        detail() {
            this.$router.push({ path: '/product/detail' })
        },
    },
}
</script>

<style>
.el-dropdown-link {
    color: #409eff;
}
</style>
