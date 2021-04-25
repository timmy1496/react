import React from "react";

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status,
    };

    activateEditMode = () => {
        this.setState({
            editMode: true,
        });
    };

    deActivateEditMode = () => {
        this.setState({
            editMode: false,
        });
        this.props.updateStatus(this.state.status);
    };

    onStatusChange = (e) => {
        let status = e.target.value;
        this.setState({
            status: status
        });
    }

    render() {
        return (
            <div>
                <div>
                    { !this.state.editMode &&
                        <span onDoubleClick={ this.activateEditMode }>{this.props.status || '----'}</span>
                    }
                </div>
                <div>
                    { this.state.editMode && <input autoFocus={true} onBlur={ this.deActivateEditMode } onChange={ this.onStatusChange } type="text" value={this.state.status}/>}
                </div>
            </div>
        );
    };
}

export default ProfileStatus;