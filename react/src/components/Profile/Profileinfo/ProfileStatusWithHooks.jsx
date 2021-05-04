import React, {useEffect, useState} from "react";

const ProfileStatusWithHooks = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    const activateMode = () => {
        setEditMode(true);
    }

    const deActivateMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const changeStatus = (e) => {
        let status = e.target.value;
        setStatus(status);
    }

    return (
        <div>
            { !editMode &&
                <div>
                    <span onDoubleClick={ activateMode }>{props.status || '----'}</span>
                </div>
            }
            { editMode &&
                <div>
                    { <input onBlur={ deActivateMode } onChange={ changeStatus } autoFocus={true} type="text" value={status}/>}
                </div>
            }
        </div>
    );
};

export default ProfileStatusWithHooks;