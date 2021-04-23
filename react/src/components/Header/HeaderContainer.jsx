import React from "react";
import Header from "./Header";
import {connect} from 'react-redux';
import {setAuthUserData} from "../../redux/auth-reducer";
import {usersApi} from "../../api/api";

class HeaderContainer extends React.Component {

    componentDidMount() {
        usersApi.getAuthProfile().then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data;
                this.props.setAuthUserData(id, email, login);
            }
        });
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    };
}

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);