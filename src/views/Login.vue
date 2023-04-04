<template>
    <div>
        <el-row type="flex" justify="center">
            <el-col :span="7">
                <el-card class="box-card tc">
                    <div slot="header" class="clearfix">
                        <h2>金融后台管理系统</h2>
                    </div>
                    <div>
                        <el-form
                            :model="ruleForm"
                            :rules="rules"
                            ref="ruleForm"
                            label-width="70px"
                            class="demo-ruleForm"
                        >
                            <el-form-item label="用户名" prop="name">
                                <el-input
                                    @keypress.enter.native="handle"
                                    v-model="ruleForm.name"
                                ></el-input>
                            </el-form-item>
                            <el-form-item label="密码" prop="password">
                                <el-input
                                    v-model="ruleForm.password"
                                    type="password"
                                    @keypress.enter.native="handle"
                                ></el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-button type="primary" style="width: 100%" @click="handle"
                                    >登录</el-button
                                >
                            </el-form-item>
                        </el-form>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import { post } from '../utils/http'
import { setToken, getToken } from '../utils/auth'
export default {
    data() {
        return {
            ruleForm: {
                name: '',
                password: '',
            },
            rules: {
                name: [
                    { required: true, message: '用户名不能为空', trigger: 'blur' },
                    { min: 3, max: 5, message: '用户名要求3-5位字符', trigger: 'blur' },
                ],
                password: [
                    {
                        pattern: /^\d{6}$/,
                        message: '密码要求是六位数字',
                        trigger: 'blur',
                        required: true,
                    },
                ],
            },
        }
    },
    methods: {
        handle() {
            this.$refs['ruleForm'].validate((valid, keys) => {
                if (valid) {
                    post('/login', this.ruleForm)
                        .then((res) => {
                            setToken(res.token)
                            sessionStorage.setItem('nickname', res.nickname)
                            this.$router.push('/')
                        })
                        .catch((error) => {
                            console.log(error)
                        })
                }
            })
        },
    },
}
</script>

<style lang="less" scoped>
.box-card {
    margin-top: 200px;
}
</style>
