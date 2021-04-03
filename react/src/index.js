import store from "./redux/state";
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

let rerenderEntireThree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={ state}
                 addPost={ store.addPost.bind(store) }
                 updateNewPostText={ store.updateNewPostText.bind(store) }
                 addMessage={ store.addMessage.bind(store)}
                 updateMessage={ store.updateMessage.bind(store)} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderEntireThree(store.getState());

store.subscriber(rerenderEntireThree)
