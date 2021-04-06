import store from "./redux/redux-store";
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

let rerenderEntireThree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={ state }
                 dispatch={ store.dispatch.bind(store) }/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderEntireThree(store.getState());

store.subscribe(() => {
    let state = store.getState();
    rerenderEntireThree(state)
})
