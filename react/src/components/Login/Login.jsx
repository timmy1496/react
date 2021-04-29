import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);
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
            <div><Field component={Input} name={'email'}  placeholder={'login'} validate={[required]}/></div>
            <div><Field component={Input} name={'password'}  placeholder={'password'} validate={[required]}/></div>
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
});

export default connect(mapStateToProps, {login})(Login);