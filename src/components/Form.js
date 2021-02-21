import React from 'react';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import { status_code } from '../apis/weatherApi';
import { weatherFetchRequestAction } from '../redux/actions';

class Form extends React.Component {
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
                />
                {this.renderError(meta)}
            </div>
        );
    };

    submit = (value, dispatch) => {
        //非同期だから、api通信の部分をバックグラウンドにして次の処理に行く
        dispatch(weatherFetchRequestAction(value));
        console.log(status_code);
        this.asyncValidate();
    };

    asyncValidate = () => {
        if (status_code === 404) {
            throw new SubmissionError({
                city_name: 'この都市の天気はわかりません。',
            });
        }
    };

    render() {
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.submit)}>
                <div className="form-row">
                    <div className="col-11">
                        <Field
                            name="city_name"
                            component={this.renderInput}
                            type="text"
                            placeholder="好きな都市を入力してください"
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

export default reduxForm({
    form: 'reduxForm',
    initialValues: { city_name: '東京都' },
    asyncBlurFields: ['city_name'],
})(Form);
