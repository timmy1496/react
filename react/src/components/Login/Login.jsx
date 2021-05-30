import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {createField, Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {Redirect} from "react-router-dom";
import style from '../common/FormsControls/FormsControl.module.css'

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData);
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </div>
    );
};

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            { createField(Input, 'email', 'login', [required]) }
            { createField(Input, 'password', 'password', [required], {type: 'password'}) }
            { createField(Input, 'rememberMe', 'remember me', [], {type: 'checkbox'}, 'remember me') }
            { error && <div className={style.formSummaryError}>
                {error}
            </div>}
            {captchaUrl && createField(Input, 'captcha', 'Captcha', [required])}
            {captchaUrl && <img className={style.captchaImg} src={captchaUrl} alt="" />}
            <div><button>Login</button></div>
        </form>
    );
};

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);

const mapStateToProps = (state) => ({
    authId: state.auth.userId,
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl,
});

export default connect(mapStateToProps, {login})(Login);