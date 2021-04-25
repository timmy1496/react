import {connect} from "react-redux";
import {withRouter} from 'react-router-dom';
import React from 'react';
import Profile from "./Profile";
import {getUserProfileStatus, getUserProfileThunk, updateUserProfileStatus} from "../../redux/profile-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainerApi extends React.Component {

    componentDidMount() {
        let userId = !this.props.match.params.userId ? this.props.authId : this.props.match.params.userId;
        this.props.getUserProfileThunk(userId);
        this.props.getUserProfileStatus(userId);
    }

    updateStatus = (status) => {
        this.props.updateUserProfileStatus(status);
    };

    render() {
        return (
            <Profile
                {...this.props}
                profile={this.props.profile}
                status={this.props.profileStatus}
                updateStatus={ this.updateStatus }/>
        );
    }
}


const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    authId: state.auth.userId,
    profileStatus: state.profilePage.profileStatus,
});

export default compose(
    connect(mapStateToProps, {getUserProfileThunk, getUserProfileStatus, updateUserProfileStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainerApi);
