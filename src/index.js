import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import createSagaMiddleware from 'redux-saga';

import { weatherReducer　} from './redux/reducers';
import saga from './sagas/weatherSaga';
import App from './components/App';


const rootReducer  = combineReducers({
    form: formReducer,
    weather: weatherReducer,
});

const sagaMiddleware = createSagaMiddleware();

//sagaMiddlewareをstoreとコネクト
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

//sagaの起動
sagaMiddleware.run(saga);

ReactDOM.render(
    //Appコンポーネントがstoreと接続できるようになった。
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
