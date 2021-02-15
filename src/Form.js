import React from 'react';
import axios from 'axios';
import constant from './constant';
import { connect } from 'react-redux';
import { returnWeatherAction } from './redux/actions';


class Form extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            apiKey: constant.API_KEY,
            requestCity: '',
            // response: []
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleGetWeather = this.handleGetWeather.bind(this)
    }


    handleGetWeather(arg) {
        axios.get(constant.API_ENDPOINT, {
            params: {
                q: arg,
                APPID: this.state.apiKey
            }
        }).then(res => {
            this.setState({
                // response: res.data.list,
                // requestCity: res.data.city.name
            });
            //dispatchでアクションを割り当てる。
            this.props.dispatch(returnWeatherAction(res.data.list, res.data.city.name));

            console.log(this.props);

        }).catch(function(error){
            console.log(error);
        })
    }

    handleInput(event){
        this.setState({
            requestCity: event.target.value,
        });
    }

    componentDidMount(){
        this.handleGetWeather('東京都');
    }


    render() {
        return (
            <div>
                <input type='text' value={this.props.requestCity} onChange={this.handleInput}/>
                <button type='submit' onClick={() => this.handleGetWeather(this.props.requestCity)}>天気get</button>
                {this.props.response.map(res=>(
                    <ul>
                        <li>{this.props.requestCity}の{res.dt_txt}の天気は{res.weather[0].main}です</li>
                    </ul>
                ))}
            </div>
        )
    }
}

export default connect(state => state)(Form);
