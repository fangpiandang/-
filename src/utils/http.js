import service from './service'
function get(url,params) {
    const config = {
        method: "get",
        url
    }
    if(params){
        config.params = params
    }
    return service(config)
}
function post(url,params) {
    const config = {
        method: "post",
        url
    }
    if(params){
        config.data = params
    }
    return service(config)
}
export {
    get,
    post
}