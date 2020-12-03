import Axios from 'axios';
import { notification } from 'antd';
import NProgress from 'nprogress';

const instance = Axios.create({
    baseURL: '',
    withCredentials: false,
});

instance.interceptors.request.use(
    (config) => {
        NProgress.start();
        return config;
    },
    (err) => {
        NProgress.done();
        return Promise.reject(err);
    }
);

instance.interceptors.response.use(
    (response) => {
        NProgress.done();
        if (response.config.url === '/cityapi/cityjson') {
            return JSON.parse(response.data.match(/{[^}{]*?}/g)[0]);
        }
        if (/history/.test(response.config.url!) || /weather/.test(response.config.url!)) {
            return response.data;
        }
        if (response.status === 200) {
            return response.data.data;
        } else {
            notification.error({ message: response.statusText });
            return Promise.reject(response.data);
        }
    },
    (err) => {
        return Promise.reject(err);
    }
);

export default instance;
