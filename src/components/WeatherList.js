import React from 'react';
import { connect } from 'react-redux';
import { weatherFetchRequestAction } from '../redux/actions';
import Form from './Form';

class WeatherList extends React.Component {
    submit = (value, dispatch) => {
        //非同期だから、api通信の部分をバックグラウンドにして次の処理に行く
        dispatch(weatherFetchRequestAction(value));
    };

    render() {
        const haveError = this.props.error_message;
        let error_message;
        if (haveError) {
            error_message = (
                <p className="alert alert-danger mt-2">
                    {this.props.error_message}
                </p>
            );
        } else {
            error_message = '';
        }

        return (
            <div>
                <Form default_city="東京都" onSubmit={this.submit} />
                {error_message}
                <div>
                    {this.props.response.map((res) => (
                        <ul>
                            <li>
                                {this.props.city_name}の{res.dt_txt}の天気は
                                {res.weather[0].main}です
                            </li>
                        </ul>
                    ))}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    //storeから渡す値をフィルタリングする。
    return {
        response: state.weather.response,
        city_name: state.weather.city_name,
        error_message: state.weather.error,
    };
};

//コンポーネントをreduxと繋ぐ
export default connect(mapStateToProps)(WeatherList);
