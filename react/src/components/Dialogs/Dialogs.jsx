import { NavLink } from 'react-router-dom';

import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";

const Dialogs = function (props) {

    let dialogsElemets = props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

    let messages = props.state.messages.map(message => <Message message={message.message}/>);

    let newMessage = React.createRef()

    let addMessage = () => {
        alert(newMessage.current.value)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                { dialogsElemets }
            </div>
            <div className={s.messages}>
                { messages}
            </div>
            <div>
                <textarea ref={ newMessage } name="" id="" cols="30" rows="10"></textarea>
                <button onClick={ addMessage }>Add message</button>
            </div>
        </div>
    );
}

export default Dialogs;