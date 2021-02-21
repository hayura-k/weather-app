import React from 'react';
import { connect } from 'react-redux';
import {
    weatherFetchRequestAction,
    weatherDefaultAction,
} from '../redux/actions';
import Form from './Form';

class WeatherList extends React.Component {
    componentDidMount() {
        this.props.weatherDefaultAction('東京都');
    }

    render() {
        return (
            <div>
                <Form />
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
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        weatherFetchRequestAction: (input_city) =>
            dispatch(weatherFetchRequestAction(input_city)),
        weatherDefaultAction: (input_city) =>
            dispatch(weatherDefaultAction(input_city)),
    };
};

//コンポーネントをreduxと繋ぐ
export default connect(mapStateToProps, mapDispatchToProps)(WeatherList);
