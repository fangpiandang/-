<template>
    <div>
        <el-submenu v-if="menu.children" :index="menu.url">
            <template slot="title">
                <i :class="menu.icon"></i>
                <span slot="title">{{ menu.name }}</span>
            </template>
            <theMenu v-for="(item, index) in menu.children" :key="index" :menu="item"></theMenu>
        </el-submenu>
        <el-menu-item v-else :index="menu.url">
            <i :class="menu.icon"></i>
            <span slot="title">{{ menu.name }}</span>
        </el-menu-item>
    </div>
</template>

<script>
export default {
    name: 'theMenu',
    props: ['menu'],
}
</script>

<style></style>
