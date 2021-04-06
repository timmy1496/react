import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebur-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, likeCount: 4, message: 'Hi, how are you?'},
                {id: 2, likeCount: 22, message: 'It\'s my first post'},
            ],
            newPostText: 'it-kamasutra.com'
        },
        dialogsPage: {
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
            newMessageText: 'hi, new message'
        },
        sideBar: {
            friends: [
                {id: 228, name: 'Artem', avatar: 'https://pristor.ru/wp-content/uploads/2020/03/%D0%90%D0%B2%D0%B0-%D0%B2-%D0%B2%D0%BA-%D0%B2-%D0%BE%D1%82%D0%BF%D1%83%D1%81%D0%BA%D0%B5-%D0%BE%D1%87%D0%B5%D0%BD%D1%8C-%D0%BF%D1%80%D0%B8%D0%BA%D0%BE%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-2.jpg'},
                {id: 1337, name: 'Evgen', avatar: 'https://www.meme-arsenal.com/memes/3d5f8382057f99043e4b80e5bd919f63.jpg'},
                {id: 12345, name: 'Tanya', avatar: 'https://cr-mp.ru/forum/uploads/monthly_2019_07/2.thumb.png.4bf6d70498bfc47585ccc6bc94d3390b.png'},
            ]
        }
    },
    _callSubscriber() {
        console.log('state was changed');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {

       this._state.profilePage = profileReducer(this._state.profilePage, action);
       this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
       this._state.sideBar = sidebarReducer(this._state.sideBar, action);

        this._callSubscriber(this._state);
    },
}


window.store = store;

export default store;