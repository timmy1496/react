import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {Redirect} from "react-router-dom";

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
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field component={Input} name={'email'}  placeholder={'login'} validate={[required]}/></div>
            <div><Field component={Input} name={'password'}  placeholder={'password'} type={'password'} validate={[required]}/></div>
            <div><Field component={Input} name={'rememberMe'} type={"checkbox"}  placeholder={'remember me'}/>remember me</div>
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
});

export default connect(mapStateToProps, {login})(Login);