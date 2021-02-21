export const types = {
    WEATHER_FETCH_REQUEST: 'WEATHER_FETCH_REQUEST',
    WEATHER_FETCH_SUCCESS: 'WEATHER_FETCH_SUCCESS',
    WEATHER_DEFAULT: 'WEATHER_DEFAULT',
};

export const weatherFetchSuccessAction = (response, city_name) => {
    return {
        type: types.WEATHER_FETCH_SUCCESS,
        payload: {
            response: response,
            city_name: city_name,
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
