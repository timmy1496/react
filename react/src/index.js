import store from "./redux/redux-store";
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux";

let rerenderEntireThree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
            <App />
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderEntireThree(store.getState());

store.subscribe(() => {
    let state = store.getState();
    rerenderEntireThree(state)
})
