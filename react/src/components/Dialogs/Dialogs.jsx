import React from 'react';

import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs = function (props) {

    let dialogsElemets = props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

    let messages = props.state.messages.map(message => <Message message={message.message}/>);

    let newMessage = React.createRef()

    let addMessage = () => {
        let message = newMessage.current.value;
        props.addMessage(message);
    }

    let onMessageChange = () => {
        let message = newMessage.current.value;
        props.updateMessage(message);
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
                <textarea onChange={ onMessageChange } ref={ newMessage } value={props.state.newMessageText} name="" id="" cols="30" rows="10"/>
                <button onClick={ addMessage }>Add message</button>
            </div>
        </div>
    );
}

export default Dialogs;