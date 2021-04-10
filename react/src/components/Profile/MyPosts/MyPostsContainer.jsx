import React from 'react';

import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {

    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let onPostChange = (text) => {
        let action = updateNewPostActionCreator(text);
        //props.updateNewPostText();
        props.store.dispatch(action);
    }

    return (
        < MyPosts
            updateNewPostText={ onPostChange }
            addPost={ addPost }
            posts={ state.profilePage.posts }
            newPostText={state.newPostText} />
    );
}

export default MyPostsContainer;