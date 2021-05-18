import profileReducer, {addPostActionCreator} from "./profile-reducer";

test('new post should be added ', function () {
    let action = addPostActionCreator('IT-KAMA.COM')
    let state = {
        posts: [
            {id: 1, likeCount: 4, message: 'Hi, how are you?'},
            {id: 2, likeCount: 22, message: 'It\'s my first post'},
        ],
    };
    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(3);
}); 