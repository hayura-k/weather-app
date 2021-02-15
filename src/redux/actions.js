export const RETURN_WEATHER = 'RETURN_WEATHER'

export const returnWeatherAction = (response, city_name) => {
    return {
        type: 'RETURN_WEATHER',
        payload: {
            response: response,
            requestCity: city_name
        }
    }
}
