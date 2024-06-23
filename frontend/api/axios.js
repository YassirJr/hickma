import axios from "axios";

export const axiosInstance = axios.create(
    {
        baseURL : 'http://localhost:8000/api',
    }
)

axiosInstance.interceptors.request.use(function (config) {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = 'Bearer ' + token
    }
    return config
})
