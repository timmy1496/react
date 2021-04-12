const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, likeCount: 4, message: 'Hi, how are you?'},
        {id: 2, likeCount: 22, message: 'It\'s my first post'},
    ],
    newPostText: 'it-kamasutra.com'
};

const profileReducer = (state = initialState, action) => {
    let stateCopy;

    switch (action.type) {
        case ADD_POST :
            let newPost = {
                id: 5,
                message: state.newPostText,
                likeCount: 0,
            };
            stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost)
            stateCopy.newPostText = '';
            break;
        case UPDATE_NEW_POST_TEXT :
            stateCopy = {...state};
            stateCopy.newPostText = action.text
            break;
        default :
            return state;
    }

    return stateCopy;
}

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        text: text
    };
}

export default profileReducer;