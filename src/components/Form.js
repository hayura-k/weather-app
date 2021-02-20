import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import {
    weatherFetchRequestAction,
    weatherDefaultAction,
    weatherFetchSuccessAction,
} from '../redux/actions';

class Form extends React.Component {
    componentDidMount() {
        this.props.weatherDefaultAction(this.props.default_city);
    }

    renderError = ({ error, touched }) => {
        if (error && touched) {
            return <p className="alert alert-danger mt-1">{error}</p>;
        }
    };

    renderInput = ({ input, placeholder, meta }) => {
        return (
            <div>
                {/* ...inputでname属性を受け取る */}
                <input
                    {...input}
                    placeholder={placeholder}
                    className="form-control"
                    value={this.props.city_name}
                />
                {this.renderError(meta)}
            </div>
        );
    };

    handleInput = (e) => {
        this.props.weatherFetchSuccessAction(
            this.props.response,
            e.target.value
        );
    };

    render() {
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit}>
                <div className="form-row">
                    <div className="col-11">
                        <Field
                            name="city_name"
                            component={this.renderInput}
                            type="text"
                            placeholder="好きな都市を入力してください"
                            onChange={this.handleInput}
                            value={this.props.city_name}
                        />
                    </div>
                    <div className="col-1">
                        <button type="submit" className="btn btn-primary">
                            検索
                        </button>
                    </div>
                </div>
            </form>
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
        weatherFetchSuccessAction: (response, city_name) =>
            dispatch(weatherFetchSuccessAction(response, city_name)),
    };
};

//フロント側での入力バリデーション
const validate = (value) => {
    const errors = {};
    if (!value.city_name) {
        errors.city_name = '空欄ですにゃん！';
    }
    return errors;
};

Form = reduxForm({
    form: 'reduxForm',
    validate,
})(Form);

export default connect(mapStateToProps, mapDispatchToProps)(Form);
