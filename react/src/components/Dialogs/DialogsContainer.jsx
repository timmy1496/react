import React from 'react';

import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import {addMessageActionCreator, updateMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = function () {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState();

                    let addMessage = (newMessage) => {
                        store.dispatch(addMessageActionCreator(newMessage));
                    }

                    let messageChange = (body) => {
                        store.dispatch(updateMessageActionCreator(body));
                    }

                    return <Dialogs
                        addMessage={addMessage}
                        messageChange={messageChange}
                        dialogs={state.dialogsPage.dialogs}
                        messages={state.dialogsPage.messages}
                        newMessageText={state.dialogsPage.newMessageText}/>
                }
            }
        </StoreContext.Consumer>
    );
}

export default DialogsContainer;