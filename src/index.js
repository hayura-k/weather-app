import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import weatherReducer from './redux/reducers';
import saga  from './sagas/weatherSaga';
import App from './components/App';


const sagaMiddleware = createSagaMiddleware();

//sagaMiddlewareをstoreとコネクト
const store = createStore(weatherReducer,applyMiddleware(sagaMiddleware));

//sagaの起動
sagaMiddleware.run(saga)

ReactDOM.render(
    //Appコンポーネントがstoreと接続できるようになった。
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('root')
)
