import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            my posts
            <div>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <div className={s.posts}>
                <Post message='Hi, how are you?' likeCount={4}/>
                <Post message={`It's my first post`} likeCount={22}/>
            </div>
        </div>
    );
}

export default MyPosts;