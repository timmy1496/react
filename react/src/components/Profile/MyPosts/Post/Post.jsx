import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img
                src="https://img-16.ccm2.net/BtdjVGwSisLoejfsY0AB3ZKEZRg=/600x/883ba4dee45849ffbdecb3fbe8f3d0a2/ccm-faq/mona.gif"
                alt=""/>
            {props.message}
            <div>
                <span>Like</span>
            </div>
        </div>
    );
}

export default Post;