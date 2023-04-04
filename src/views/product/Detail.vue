<template>
    <div>
        <el-button @click="back">返回</el-button>
    </div>
</template>

<script>
export default {
    methods: {
        back() {
            this.$router.push('/product/allproduct')
        },
    },
}
</script>

<style></style>
