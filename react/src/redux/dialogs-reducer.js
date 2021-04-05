const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE = 'UPDATE-MESSAGE';

const dialogsReducer = (state, action) => {

    switch (action.type) {
        case ADD_MESSAGE :
            let newMessage = {
                id: 10,
                message: action.message,
            };
            state.messages.push(newMessage);
            state.newMessageText = '';
            break;
        case UPDATE_MESSAGE:
            state.newMessageText = action.message;
            break;
    }

    return state;
}

export const addMessageActionCreator = (message) => {
    return {
        type: 'ADD-MESSAGE',
        message: message
    };
}

export const updateMessageActionCreator = (message) => {
    return {
        type: 'UPDATE-MESSAGE',
        message: message
    };
}

export default dialogsReducer;