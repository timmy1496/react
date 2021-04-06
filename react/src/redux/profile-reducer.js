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
    switch (action.type) {
        case ADD_POST :
            let newPost = {
                id: 5,
                message: state.newPostText,
                likeCount: 0,
            };

            state.posts.push(newPost);
            state.newPostText = '';
            break;
        case UPDATE_NEW_POST_TEXT :
            state.newPostText = action.text;
            break;
    }

    return state;
}

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        text: text
    };
}

export default profileReducer;