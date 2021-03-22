import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

const 8Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img
                    src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"
                    alt=""/>
            </div>
            <div>
                ava + decsription
            </div>
            <MyPosts />
        </div>
    );
}

export default Profile;

