import React from 'react';

import s from './MyPosts.module.css';
import Post from './Post/Post';
import {reduxForm} from "redux-form";
import Form from "../../Form/Form";

const MyPosts = React.memo((props) => {
    console.log('render yo')

    let posts = props.posts.map(post => <Post message={post.message} likeCount={post.likeCount}/>);

    let newPostElement = React.createRef();

    let onAddPost = (text) => {
        props.addPost(text);
        //props.dispatch(addPostActionCreator());
    }

    const onSubmit = (formData) => {
        onAddPost(formData.text);
    }

    return (
        <div className={s.postsBlock}>
            <h3>my posts</h3>
            <PostsFormRedux onSubmit={onSubmit}/>
            <div className={s.posts}>
                { posts }
            </div>
        </div>
    );
});

const PostsFormRedux = reduxForm({form: 'posts'})(Form)

export default MyPosts;