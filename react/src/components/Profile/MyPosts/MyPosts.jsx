import React from 'react';

import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profile-reducer";


const MyPosts = (props) => {

    let posts = props.posts.map(post => <Post message={post.message} likeCount={post.likeCount}/>);

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
        //props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={s.postsBlock}>
            <h3>my posts</h3>
            <div>
                <div>
                    <textarea onChange={ onPostChange } ref={ newPostElement } value={props.newPostText} name="" id="" cols="30" rows="10" />
                </div>
                <div>
                    <button onClick={ onAddPost }>Add post</button>
                </div>
                <div>
                    <button>Remove</button>
                </div>
            </div>
            <div className={s.posts}>
                { posts }
            </div>
        </div>
    );
}

export default MyPosts;