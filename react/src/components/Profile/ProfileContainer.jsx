import {connect} from "react-redux";
import {withRouter} from 'react-router-dom';
import React from 'react';
import Profile from "./Profile";
import {getUserProfileThunk} from "../../redux/profile-reducer";


class ProfileContainerApi extends React.Component {

    componentDidMount() {
        let userId = !this.props.match.params.userId ? this.props.authId : this.props.match.params.userId;
        this.props.getUserProfileThunk(userId);
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    }
}

const mapStateToProps = (state) => ({profile: state.profilePage.profile, authId: state.auth.userId});

let withUrlDataContainerComponent = withRouter(ProfileContainerApi);

export default connect(mapStateToProps, {getUserProfileThunk})(withUrlDataContainerComponent);
