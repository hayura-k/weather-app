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
        const haveError = this.props.error_message;
        let error_message;
        if(haveError){
            error_message = <p className='alert alert-danger mt-2'>{this.props.error_message}</p>
        } else {
            error_message = ''
        }

        return (
            <div>
                <Form />
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
    console.log(state);
    return {
        response: state.weather.response,
        city_name: state.weather.city_name,
        error_message: state.weather.error
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
