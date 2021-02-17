import React from 'react';
import { connect } from 'react-redux';
import { returnWeatherAction } from './redux/actions';
import axios from 'axios';
import constant from './constant';


class Form extends React.Component {
    constructor(props){
        super(props);
        this.handleInput = this.handleInput.bind(this);
    }

    handleGetWeather = async(arg)=>{
        try{
            const res  =  await axios.get(constant.API_ENDPOINT, {
                params: {
                    q: arg,
                    APPID: constant.API_KEY
                }
            })
            this.props.returnWeatherAction(res.data.list, res.data.city.name)
            console.log(this.props)

        } catch(error){
            console.log(error)
        }
    }


    handleInput(event){
        this.props.returnWeatherAction(this.props.response, event.target.value);
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

const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = (dispatch) => {
    return {
        returnWeatherAction: (response, city_name)=>dispatch(returnWeatherAction(response, city_name))
    }
}

//コンポーネントをreduxと繋ぐ
export default connect(mapStateToProps, mapDispatchToProps)(Form);
