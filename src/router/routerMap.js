export default [
    {
        path: '/',
        name: "Layout",
        component: ()=>import('../views/Layout.vue'),
        redirect: '/index',
        children:[
            {
                path: '/index',
                name: 'Index',
                component: ()=>import('../views/index')
            },
            {
                path: '/account/all',
                name: 'account_all',
                meta: {bread:['账户管理','所有人员']},
                component: ()=>import('../views/account/All.vue')
            },
            {
                path: '/product/allproduct',
                name: 'product_all',
                meta: {bread:['产品管理','全部产品'],keepAlive:true},
                component: ()=>import('../views/product/All.vue')
            },
            {
                path: '/product/detail',
                name: 'product_detail',
                meta: {bread:['产品管理','全部产品','产品详情']},
                component: ()=>import('../views/product/Detail.vue')
            },
            {
                path: '/product/detail',
                name: 'product_detail',
                meta: {bread:['产品管理','全部产品','产品详情']},
                component: ()=>import('../views/product/Detail.vue')
            },
            {
                path: '/order/allorders',
                name: 'order_allorders',
                meta: {bread:['订单管理','全部订单']},
                component: ()=>import('../views/order/allorders.vue')
            }
        ]
    },
    {
        path: '/login',
        name: "Login",
        component: ()=>import('../views/Login.vue')
    },
    {
        path: '*',
        name: '404',
        component: ()=>import('../views/404.vue')
    }
]