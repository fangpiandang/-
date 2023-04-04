<template>
    <div>
        <el-dialog :title="tips" :visible="visible" width="500px" @close="close">
            <el-form :rules="rules" :model="ruleForm" ref="ruleForm" label-width="80px">
                <el-form-item label="角色" prop="character">
                    <el-select v-model="ruleForm.character" style="width: 100%">
                        <el-option label="业务人员" value="业务人员"></el-option>
                        <el-option label="审核人员" value="审核人员"></el-option>
                        <el-option label="风控经理" value="风控经理"></el-option>
                        <el-option label="管理员" value="管理员"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="备注" prop="remark">
                    <el-input v-model="ruleForm.remark"></el-input>
                </el-form-item>
                <el-form-item label="创建原因" prop="reason">
                    <el-input type="textarea" v-model="ruleForm.reason"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="close">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
    props: ['visible'],
    data() {
        return {
            ruleForm: {
                character: '',
                remark: '',
                reason: '',
            },
            rules: {
                character: [
                    {
                        required: true,
                        message: '不能为空',
                        trigger: 'blur',
                    },
                ],

                remark: [
                    {
                        required: true,
                        message: '不能为空',
                        trigger: 'blur',
                    },
                ],

                reason: [
                    {
                        required: true,
                        message: '不能为空',
                        trigger: 'blur',
                    },
                ],
            },
        }
    },
    computed: {
        ...mapState(['row']),
        tips() {
            if (this.row.character) {
                return '编辑角色'
            } else {
                return '新建角色'
            }
        },
    },
    methods: {
        ...mapMutations(['setRow']),
        close() {
            this.ruleForm = {
                character: '',
                remark: '',
                reason: '',
            }
            this.setRow({})
            this.$emit('close')
        },
    },
    watch: {
        visible() {
            const { character, remark, reason } = this.row
            this.ruleForm = { character, remark, reason }
        },
    },
}
</script>

<style></style>
