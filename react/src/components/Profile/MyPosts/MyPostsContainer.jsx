import React from 'react';

import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {addMessageActionCreator, updateMessageActionCreator} from "../../../redux/dialogs-reducer";


// const MyPostsContainer = (props) => {
//
//     //let state = props.store.getState();
//
//     let addPost = () => {
//         props.store.dispatch(addPostActionCreator());
//     }
//
//     let onPostChange = (text) => {
//         let action = updateNewPostActionCreator(text);
//         //props.updateNewPostText();
//         props.store.dispatch(action);
//     }
//
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     let state = store.getState();
//
//                     let addPost = () => {
//                         store.dispatch(addPostActionCreator());
//                     }
//
//                     let onPostChange = (text) => {
//                         let action = updateNewPostActionCreator(text);
//                         //props.updateNewPostText();
//                         store.dispatch(action);
//                     }
//
//                     return < MyPosts
//                         updateNewPostText={onPostChange}
//                         addPost={addPost}
//                         posts={state.profilePage.posts}
//                         newPostText={state.profilePage.newPostText}/>
//                 }
//             }
//         </StoreContext.Consumer>
//     );
// }

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    };
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: () => {
            dispatch(addPostActionCreator());
        },
        addPost: (action) => {
            dispatch(action);
        },

    };
}

let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;