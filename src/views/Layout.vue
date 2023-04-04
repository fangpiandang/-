<template>
    <div>
        <el-container>
            <el-aside width="200px"><NavLeft></NavLeft></el-aside>
            <el-container>
                <el-header><Headers></Headers></el-header>
                <el-main class="bg">
                    <router-view v-if="!$route.meta.keepAlive"></router-view>
                    <keep-alive
                        ><router-view v-if="$route.meta.keepAlive"></router-view
                    ></keep-alive>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import Headers from '../components/Headers.vue'
import NavLeft from '../components/NavLeft.vue'
export default {
    components: {
        Headers,
        NavLeft,
    },
}
</script>

<style scoped lang="less">
.bg {
    background-color: #e9eef3;
    height: 72vh;
}
.el-aside {
    height: 100vh;
    background-color: #001529;
}
.el-container {
    // height: 100%;
}
</style>
