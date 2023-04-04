<template>
    <div class="head_wrap">
        <div class="head fr">
            <el-dropdown @command="handleCommand">
                <span class="el-dropdown-link">
                    {{ nickname }}<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>个人中心</el-dropdown-item>
                    <el-dropdown-item>修改密码</el-dropdown-item>
                    <el-dropdown-item command="3">退出登录</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
        <p class="date fr mr" style="line-height: 60px">
            <span class="tips">{{ days }}</span>
        </p>
    </div>
</template>

<script>
import { get } from '@/utils/http'
import { removeToken } from '@/utils/auth'

export default {
    data() {
        return {
            time: '',
            nickname: sessionStorage.getItem('nickname'),
        }
    },
    mounted() {
        get('/in').then((res) => {
            this.time = res.time
        })
    },
    computed: {
        days() {
            let now = new Date()
            let target = new Date(this.time)
            let ms = now - target
            return Math.floor(ms / 1000 / 60 / 60 / 24)
        },
    },
    methods: {
        handleCommand(command) {
            if (command === '3') {
                removeToken()
                this.$router.push('/login')
            }
        },
    },
}
</script>

<style>
.head_wrap {
    line-height: 60px;
}
.tips {
    color: #40a9ff;
    font-size: 24px;
}
</style>
