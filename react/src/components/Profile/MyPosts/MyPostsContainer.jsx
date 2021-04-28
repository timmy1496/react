import React from 'react';

import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {addMessageActionCreator, updateMessageActionCreator} from "../../../redux/dialogs-reducer";

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    };
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            dispatch(updateNewPostActionCreator(text));
        },
        addPost: (text) => {
            dispatch(addPostActionCreator(text));
        },

    };
}

let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;