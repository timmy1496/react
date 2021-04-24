import {connect} from "react-redux";
import {Redirect, withRouter} from 'react-router-dom';
import React from 'react';
import Profile from "./Profile";
import {getUserProfileThunk} from "../../redux/profile-reducer";


class ProfileContainerApi extends React.Component {

    componentDidMount() {
        let userId = !this.props.match.params.userId ? this.props.authId : this.props.match.params.userId;
        this.props.getUserProfileThunk(userId);
    }

    render() {
        if (!this.props.isAuth) {
            return <Redirect to={"/login"}/>
        }

        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    authId: state.auth.userId,
    isAuth: state.auth.isAuth,
});

let withUrlDataContainerComponent = withRouter(ProfileContainerApi);

export default connect(mapStateToProps, {getUserProfileThunk})(withUrlDataContainerComponent);
