import React from 'react';

import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import {addMessageActionCreator, updateMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = function (props) {
    let state = props.store.getState();

    let addMessage = (newMessage) => {
        props.store.dispatch(addMessageActionCreator(newMessage));
    }

    let messageChange = (body) => {
        props.store.dispatch(updateMessageActionCreator(body));
    }

    return (
       <Dialogs
           addMessage={ addMessage }
           messageChange={ messageChange }
           dialogs={ state.dialogsPage.dialogs }
           messages={ state.dialogsPage.messages }
           newMessageText={ state.dialogsPage.newMessageText }/>
    );
}

export default DialogsContainer;