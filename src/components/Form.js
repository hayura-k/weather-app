import React from 'react';
import { connect } from 'react-redux';
import {
    weatherFetchSuccessAction,
    weatherFetchRequestAction,
} from '../redux/actions';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(event) {
        this.props.weatherFetchSuccessAction(
            this.props.response,
            event.target.value
        );
    }

    componentDidMount() {
        this.props.weatherFetchRequestAction('東京都');
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.props.city_name}
                    onChange={this.handleInput}
                />
                <button
                    type="submit"
                    onClick={() =>
                        this.props.weatherFetchRequestAction(
                            this.props.city_name
                        )
                    }
                >
                    天気get
                </button>
                {this.props.response.map((res) => (
                    <ul>
                        <li>
                            {this.props.city_name}の{res.dt_txt}の天気は
                            {res.weather[0].main}です
                        </li>
                    </ul>
                ))}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    //storeから渡す値をフィルタリングする。
    return { response: state.response, city_name: state.city_name };
};

const mapDispatchToProps = (dispatch) => {
    return {
        weatherFetchSuccessAction: (response, city_name) =>
            dispatch(weatherFetchSuccessAction(response, city_name)),
        weatherFetchRequestAction: (input_city) =>
            dispatch(weatherFetchRequestAction(input_city)),
    };
};

//コンポーネントをreduxと繋ぐ
export default connect(mapStateToProps, mapDispatchToProps)(Form);
