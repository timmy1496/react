import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import { Redirect } from "react-router-dom";
import {reduxForm} from "redux-form";
import Form from "../Form/Form";

const Dialogs = function (props) {
    let dialogsElemets = props.dialogs.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>);

    let messages = props.messages.map(message => <Message message={message.message} key={message.id}/>);

    let newMessage = React.createRef()

    let onAddMessage = (message) => {
        props.addMessage(message);
    }

    let onMessageChange = (e) => {
        let body = e.target.value;
        props.messageChange(body);
    }

    const onSubmit = (formData) => {
        onAddMessage(formData.text);
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
                <DialogsFormRedux onSubmit={onSubmit} />
            </div>
        </div>
    );
}

const DialogsFormRedux = reduxForm({form: 'dialogs'})(Form)

export default Dialogs;