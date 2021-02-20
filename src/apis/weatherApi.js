import axios from 'axios';
import constant from '../components/Constant';

export let status_code;

export const handleGetWeather = async (arg) => {
    try {
        const response = await axios.get(constant.API_ENDPOINT, {
            params: {
                q: arg,
                APPID: constant.API_KEY,
            },
        });
        const array_res = [response.data.list, response.data.city.name];
        status_code = 'right';
        console.log(status_code)
        return array_res;
    } catch (error) {
        const {status} = error.response
        status_code = status
        console.log(status_code)
    }
};
