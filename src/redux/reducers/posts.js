const initialState = []

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_POSTS":
            return action.payload
        default:
            return state
    }
}

export default postsReducer