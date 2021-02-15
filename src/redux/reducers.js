import { RETURN_WEATHER } from './actions';
import initialState from './stores/initialState';


export const weatherReducer = (state = initialState.weather, action)=>{
    switch(action.type){
        case RETURN_WEATHER:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export default weatherReducer;
