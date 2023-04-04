import Mock from 'mockjs'
//登录接口

Mock.mock("http://localhost:8080/login","post",(req)=>{
    let {name,password} = JSON.parse(req.body)
    if(name=="user"&&password=="123456"){
        return {
            code: 200,
            success: true,
            message: '登录成功',
            token:  '8fasddfi8hjcds8799lkj900',
            nickname: '赵铁柱'
        }
    }
    return {
        code: 100,
        success: false,
        message: '账号密码不正确'
    }
})
Mock.mock('http://localhost:8080/in','get',()=>{
    return {
        code: 200,
        success: true,
        message: '操作成功',
        time: "2020-1-1 00:00:00"
    }
})
const menuList = [
    {
        name: '首页',
        icon: 'el-icon-s-home',
        url: '/index'
    },
    {
        name: '账户管理',
        icon: 'el-icon-coin',
        url: '/account',
        children: [
            {
                name: '所有人员',
                icon: 'el-icon-user',
                url: '/account/all'
            }
        ]
    },
    {
        name: '产品管理',
        icon: 'el-icon-coin',
        url: '/product',
        children: [
            {
                name: '所有产品',
                icon: 'el-icon-user',
                url: '/product/allproduct'
            }
        ]
    },
    {
        name: '订单管理',
        icon: 'el-icon-coin',
        url: '/order',
        children: [
            {
                name: '所有订单',
                icon: 'el-icon-user',
                url: '/order/allorders'
            }
        ]
    },
]
Mock.mock('http://localhost:8080/menu','get',()=>{
    return {
        code: 200,
        success: true,
        message: '成功',
        data: menuList
    }
})
Mock.mock('http://localhost:8080/charts','get',()=>{
    return {
        code: 200,
        success: true,
        message: '成功',
        lineData: [820, 932, 901, 934, 1290, 1330, 1320],
        peiData: [
            { value: 335, name: '房闪贷' },
            { value: 310, name: '新车贷' },
            { value: 234, name: '资金贷' },
            { value: 135, name: '合力贷' },
            { value: 1584, name: '其他' },
        ]
    }
})
Mock.mock('http://localhost:8080/all','get',()=>{
    return {
        code: 200,
        success: true,
        message: '成功',
        data: Mock.mock({
            "list|20-40":[{
                "account|100000-999999":1,
                "id|+1":1,
                "name":"@cname",
                "character|1":["业务人员",'审核人员','风控经理','管理员'],
                "remark|5-20":"@cword",
                "reason|1":['需要系统录入进补充资料','对进件进行风险审核','对放款进行风险评审'],
                'status|1':[1,2]
            }],
            "total|1":[10,20,30,40,50]
        })
    }
})
Mock.mock('http://localhost:8080/productList','get',()=>{
    return {
        code: 200,
        success: true,
        message: '成功',
        data:   Mock.mock({
            "list|8-20":[{
                'id|+1':10000,
                'type|1':['汽车消费','房产消费','抵押贷款'],
                "name|1":['巴贝拉贷款','麦地金融','日借贷','爱猫贷款','樱花分期'],
                'limit|1':[100,200,300],
                'rate|1':[4.1,4.3,3.8,3.9,5.3],
                'number':Mock.Random.integer(30,200),
                'total':Mock.Random.integer(10000000,500000000),
                'average':Mock.Random.integer(10000000,250000000),
                'status|1':[1,2],
                'highest|1':[36,60,24,360],
                'date':Mock.Random.date()
            }],
            'total|1':[10,20,30,40,50]
        })
    }
})