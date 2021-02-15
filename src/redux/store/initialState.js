import constant from '../../constant';

const initialState = {
    weather: {
        apiKey: constant.API_KEY,
        requestCity: '',
        response: []
    }
}

export default initialState;
