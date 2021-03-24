import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

    let postsData = [
        {id: 1, likeCount: 4, message: 'Hi, how are you?'},
        {id: 2, likeCount: 22, message: 'It\'s my first post'},
    ];

    let posts = postsData.map(post => <Post message={post.message} likeCount={post.likeCount}/>);

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
                { posts }
            </div>
        </div>
    );
}

export default MyPosts;