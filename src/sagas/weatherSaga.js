import {stopSubmit} from 'redux-form'
import { put, call, takeEvery } from 'redux-saga/effects';
import { handleGetWeather } from '../apis/weatherApi';
import { weatherFetchSuccessAction } from '../redux/actions';

//この中でapi通信をする。引数のactionにはviewからdispatchで送ったアクションを指す。
function* fetchWeather(action) {
    try {
        //api通信を行う。callの第二引数は、第一引数の関数の引数。
        const [response, city_name] = yield call(
            handleGetWeather,
            action.payload.input_params.city_name
        );
        //アクションをdispatchする
        yield put(weatherFetchSuccessAction(response, city_name));
    } catch (error) {
        console.log(error);
        yield put(stopSubmit('reduxForm',{city_name: 'この都市は検索'}))

    }
}

//WEATHER_FETCH_REQUESTアクションが送られてくるたびに、第二引数の関数を処理する。
function* saga() {
    yield takeEvery('WEATHER_FETCH_REQUEST', fetchWeather);
}

export default saga;
