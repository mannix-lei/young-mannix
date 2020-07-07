import Axios from 'axios';

const instance = Axios.create({
    baseURL: '/api',
    timeout: 5000,
    withCredentials: false,
    proxy: {
        host: '127.0.0.1',
        port: 8000,
    },
});

instance.interceptors.request.use((config) => {
    return config;
}, (err) => {
    return Promise.reject(err);
});

instance.interceptors.response.use((response) => {
    return response;
}, (err) => {
    return Promise.reject(err);
});

export default instance;
