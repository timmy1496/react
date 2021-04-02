import state, {subscribe} from "./redux/state";
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {
    addMessage,
    addPost,
    updateMessage,
    updateNewPostText,
} from './redux/state';

let rerenderEntireThree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state}
                 addPost={ addPost }
                 updateNewPostText={ updateNewPostText }
                 addMessage={addMessage}
                 updateMessage={updateMessage} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderEntireThree(state);

subscribe(rerenderEntireThree);
