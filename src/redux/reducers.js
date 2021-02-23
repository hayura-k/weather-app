import { types } from './actions';
import initialState from './stores/initialState';

export const weatherReducer = (state = initialState.weather, action) => {
    switch (action.type) {
        case types.WEATHER_FETCH_SUCCESS:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
};
