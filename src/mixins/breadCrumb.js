export default {
    data() {
        return {
            breadList:[]
        }
    },
    created() {
        this.getBreadCrumb()
    },
    methods: {
        getBreadCrumb(){
            this.breadList = this.$route.meta.bread
        }
    }
}