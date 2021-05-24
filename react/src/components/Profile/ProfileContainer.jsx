import {connect} from "react-redux";
import {withRouter} from 'react-router-dom';
import React from 'react';
import Profile from "./Profile";
import {
    getUserProfileStatus,
    getUserProfileThunk,
    saveUserPhoto,
    updateUserProfileStatus
} from "../../redux/profile-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainerApi extends React.Component {

    refreshProfile = () => {
        let userId = this.props.match.params.userId;

        if (!userId) {
            userId = this.props.authId;
            if (!userId) {
                this.props.history.push("/login");
            }
        }

        this.props.getUserProfileThunk(userId);
        this.props.getUserProfileStatus(userId);
    }

    componentDidMount() {
       this.refreshProfile();
    }

    componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot: SS) {
        let prevUserId = prevProps.match.params.userId;
        if (this.props.match.params.userId !== prevUserId) {
            this.refreshProfile();
        }
    }

    savePhoto = () => {

    };

    updateStatus = (status) => {
        this.props.updateUserProfileStatus(status);
    };

    render() {
        return (
            <Profile
                {...this.props}
                isOwner={ !this.props.match.params.userId }
                savePhoto={this.props.saveUserPhoto}
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
    connect(mapStateToProps, {getUserProfileThunk, getUserProfileStatus, updateUserProfileStatus, saveUserPhoto}),
    withRouter,
    // withAuthRedirect
)(ProfileContainerApi);
