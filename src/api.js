import axios from 'axios';
import constant from './constant';

const weatherApi = axios.create({
    baseURL: constant.API_ENDPOINT,
    method: 'get',
    params: {
        APPID: constant.API_KEY,
    },
});

export default weatherApi;
