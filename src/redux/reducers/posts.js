import initialState from "./initialStates"

const postsReducer = (state = initialState.posts, action) => {
    switch (action.type) {
        case "FETCH_POSTS":
            return action.payload
        default:
            return state
    }
}

export default postsReducer