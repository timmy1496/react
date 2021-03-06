const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'YO'},
        {id: 4, message: 'YO'},
        {id: 5, message: 'YO'},
        {id: 6, message: 'YO'}
    ],
};


const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE :
            let newMessage = {
                id: 10,
                message: action.message,
            };
            return  {
                ...state,
                newMessageText: '',
                messages: [...state.messages, newMessage]
            };
        default :
            return state;
    }
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