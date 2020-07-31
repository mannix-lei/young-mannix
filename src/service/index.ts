import Axios from 'axios';
import { notification } from 'antd';

const instance = Axios.create({
    baseURL: '',
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
        if (response.config.url === '/cityapi/cityjson') {
            return JSON.parse(response.data.match(/{[^}{]*?}/g)[0]);
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
