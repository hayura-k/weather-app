import constant from '../../constant';

const initialState = {
    weather: {
        apiKey: constant.API_KEY,
        response: [],
        city_name: ''
    }
}

export default initialState;
