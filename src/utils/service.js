import axios from 'axios'
import {Message} from 'element-ui'
import { getToken } from './auth'
const service = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 5000,

})
service.interceptors.request.use((config)=>{
    if(getToken()){
        config.headers.token = getToken()
    }
    return config    
},(error)=>{
    return Promise.reject(new Error(error.message || '请求失败'))
})
service.interceptors.response.use((res)=>{
    if(res.status===200){
        let response = res.data
        if(response.success){
            return response
        }else{
            Message.error({
                message: response.message || '请求错误'
            })
            return Promise.reject(new Error(response.message||'请求错误'))
        }
       
    }
    
},function(error){
    Message.error({
        message: error.message||'请求错误'
    })
    return Promise.reject(new Error(error.message||'请求错误'))
})
export default service