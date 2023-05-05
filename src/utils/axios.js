import axios from 'axios';



axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8';
let service = axios.create({
    baseURL: "",
    timeout: 10000,
});




//响应拦截器
http.interceptors.response.use(
    (res) => {
        loadingInstance?.close();
        return res.data;
    },
    (err) => {
        loadingInstance?.close();
        //请求失败
        return Promise.reject(err);
    }
)


export default service;