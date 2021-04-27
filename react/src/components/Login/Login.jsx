import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData);
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
            <div><Field component={"input"} name={'email'}  placeholder={'login'}/></div>
            <div><Field component={"input"} name={'password'}  placeholder={'password'}/></div>
            <div><Field component={"input"} name={'rememberMe'} type={"checkbox"}  placeholder={'remember me'}/>remember me</div>
            <div><button>Login</button></div>
        </form>
    );
};

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);

const mapStateToProps = (state) => ({
    authId: state.auth.userId,
});

export default connect(mapStateToProps, {login})(Login);