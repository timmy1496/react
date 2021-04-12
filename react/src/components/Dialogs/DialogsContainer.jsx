import React from 'react';

import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import {addMessageActionCreator, updateMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText,
    };
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (newMessage) => {
            dispatch(addMessageActionCreator(newMessage));
        },
        messageChange: (body) => {
            dispatch(updateMessageActionCreator(body));
        },
    };
}

let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;