import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div className={s.postsBlock}>
            <h3>my posts</h3>
            <div>
                <div>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
                <div>
                    <button>Remove</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post message='Hi, how are you?' likeCount={4}/>
                <Post message={`It's my first post`} likeCount={22}/>
            </div>
        </div>
    );
}

export default MyPosts;