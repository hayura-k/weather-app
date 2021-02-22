export const types = {
    WEATHER_FETCH_REQUEST: 'WEATHER_FETCH_REQUEST',
    WEATHER_FETCH_SUCCESS: 'WEATHER_FETCH_SUCCESS',
    WEATHER_DEFAULT: 'WEATHER_DEFAULT',
    ERROR_RESPONSE: 'ERROR_RESPONSE'
};

export const weatherFetchSuccessAction = (response, city_name) => {
    return {
        type: types.WEATHER_FETCH_SUCCESS,
        payload: {
            response: response,
            city_name: city_name,
            error: null
        },
    };
};

export const weatherFetchRequestAction = (input_params) => {
    return {
        type: types.WEATHER_FETCH_REQUEST,
        payload: { input_params },
    };
};

export const weatherDefaultAction = (city_name) => {
    return {
        type: types.WEATHER_FETCH_REQUEST,
        payload: { input_params: { city_name: city_name } },
    };
};

export const errorResponseAction = (error) => {
    return {
        type: types.ERROR_RESPONSE,
        payload: {
            error: 'この都市は検索出来ないよ！'
        }
    }
}
