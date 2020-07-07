import Axios from 'axios';
import { notification } from 'antd';

const instance = Axios.create({
    baseURL: '/api',
    withCredentials: false,
});

instance.interceptors.request.use(
    (config) => {
        return config;
    },
    (err) => {
        return Promise.reject(err);
    }
);

instance.interceptors.response.use(
    (response) => {
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
