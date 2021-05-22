import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebur-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk"
import { reducer as formReducer} from 'redux-form';
import appReducer from "./app-reducer";
import { composeWithDevTools } from 'redux-devtools-extension';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sideBar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,
})

const store = createStore(
    reducers,
    composeWithDevTools(
        applyMiddleware(thunkMiddleware)
        // other store enhancers if any
    )
);
// window.store = store;

export default store;