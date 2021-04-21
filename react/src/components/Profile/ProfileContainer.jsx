import {connect} from "react-redux";
import { withRouter } from 'react-router-dom';
import React from 'react';
import Profile from "./Profile";
import * as axios from "axios";
import {setUserProfile} from "../../redux/profile-reducer";


class ProfileContainerApi extends React.Component {

    componentDidMount() {
        let userId = !this.props.match.params.userId ? this.props.authId : this.props.match.params.userId;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setUserProfile(response.data);
            });
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        );
    }
}

const mapStateToProps = (state) => ({profile: state.profilePage.profile, authId: state.auth.userId});

let withUrlDataContainerComponent = withRouter(ProfileContainerApi);

export default connect(mapStateToProps, {setUserProfile})(withUrlDataContainerComponent);
