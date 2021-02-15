import React from 'react';
import axios from 'axios';
import constant from './constant';
import { connect } from 'react-redux';
import { returnWeatherAction } from './redux/actions';


class Form extends React.Component {
    constructor(props){
        super(props);
        this.handleInput = this.handleInput.bind(this);
        this.handleGetWeather = this.handleGetWeather.bind(this)
    }


    handleGetWeather(arg) {
        axios.get(constant.API_ENDPOINT, {
            params: {
                q: arg,
                APPID: this.props.apiKey
            }
        }).then(res => {
            //dispatchでアクションを割り当てる。
            this.props.dispatch(returnWeatherAction(res.data.list, res.data.city.name));
            console.log(this.props);

        }).catch(function(error){
            console.log(error);
        })
    }

    handleInput(event){
        this.props.dispatch(returnWeatherAction(this.props.response, event.target.value))
    }

    componentDidMount(){
        this.handleGetWeather('東京都');
    }


    render() {
        return (
            <div>
                <input type='text' value={this.props.city_name} onChange={this.handleInput}/>
                <button type='submit' onClick={() => this.handleGetWeather(this.props.city_name)}>天気get</button>
                {this.props.response.map(res=>(
                    <ul>
                        <li>{this.props.city_name}の{res.dt_txt}の天気は{res.weather[0].main}です</li>
                    </ul>
                ))}
            </div>
        )
    }
}

//コンポーネントをreduxと繋ぐ
export default connect(state => state)(Form);
