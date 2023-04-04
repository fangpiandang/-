<template>
    <div>
        <h1 class="title">金融后台管理系统</h1>
        <el-menu router background-color="#001529" text-color="#fff" active-text-color="#ffd04b">
            <menus v-for="(item, index) in menuData" :key="index" :menu="item"></menus>
        </el-menu>
    </div>
</template>

<script>
import Menus from '@/components/Menu'
import { get } from '@/utils/http'
export default {
    data() {
        return {
            menuData: [],
        }
    },
    mounted() {
        get('/menu').then((res) => {
            this.menuData = res.data
        })
    },
    components: {
        Menus,
    },
}
</script>

<style>
.el-menu {
    border-right: none;
}
.title {
    line-height: 50px;
    color: #fff;
    text-align: center;
}
</style>
