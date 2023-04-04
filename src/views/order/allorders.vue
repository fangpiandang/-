<template>
    <div>
        <el-breadcrumb separator="/">
            <el-breadcrumb-item v-for="(item, index) in breadList" :key="index">{{
                item
            }}</el-breadcrumb-item>
        </el-breadcrumb>
        <el-card class="mt">
            <el-radio-group v-model="radio1">
                <el-radio-button label="1">待审核</el-radio-button>
                <el-radio-button label="2">审核中</el-radio-button>
                <el-radio-button label="3">审核通过</el-radio-button>
                <el-radio-button label="4">审核拒绝</el-radio-button>
                <el-radio-button label="5">已放款</el-radio-button>
            </el-radio-group>
        </el-card>
        <el-card class="mt">
            <keep-alive>
                <component :is="currentTab"></component>
            </keep-alive>
        </el-card>
    </div>
</template>

<script>
import breadCrumb from '@/mixins/breadCrumb.js'
import Tabs1 from './Tab2.vue'
import Tabs2 from './Tabs1.vue'
export default {
    mixins: [breadCrumb],
    data() {
        return {
            radio1: '1',
        }
    },
    computed: {
        currentTab() {
            return 'Tabs' + this.radio1
        },
    },
    components: {
        Tabs1,
        Tabs2,
    },
}
</script>

<style></style>
