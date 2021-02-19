export const types = {
    WEATHER_FETCH_REQUEST: 'WEATHER_FETCH_REQUEST',
    WEATHER_FETCH_SUCCESS: 'WEATHER_FETCH_SUCCESS',
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

export const weatherFetchRequestAction = (input_city) => {
    return {
        type: types.WEATHER_FETCH_REQUEST,
        payload: {
            input_city: input_city,
        },
    };
};
