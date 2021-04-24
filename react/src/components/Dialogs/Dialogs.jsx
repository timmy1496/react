import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import { Redirect } from "react-router-dom";

const Dialogs = function (props) {
    let dialogsElemets = props.dialogs.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>);

    let messages = props.messages.map(message => <Message message={message.message} key={message.id}/>);

    let newMessage = React.createRef()

    let onAddMessage = () => {
        let message = newMessage.current.value;
        props.addMessage(message);
    }

    let onMessageChange = (e) => {
        let body = e.target.value;
        props.messageChange(body);
    }

    if (!props.isAuth) {
        return <Redirect to={"/login"}/>
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                { dialogsElemets }
            </div>
            <div className={s.messages}>
                { messages }
            </div>
            <div>
                <textarea onChange={ onMessageChange } ref={ newMessage } value={props.newMessageText} name="" id="" cols="30" rows="10"/>
                <button onClick={ onAddMessage }>Add message</button>
            </div>
        </div>
    );
}

export default Dialogs;