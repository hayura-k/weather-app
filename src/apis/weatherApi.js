import axios from 'axios';
import constant from '../constant';

export const handleGetWeather = async(arg)=>{
    try{
        const response  =  await axios.get(constant.API_ENDPOINT, {
            params: {
                q: arg,
                APPID: constant.API_KEY
            }
        })
        const array_res = [response.data.list, response.data.city.name]
        console.log(array_res);
        return array_res;
    } catch(error){
        console.log(error);
    }
}
