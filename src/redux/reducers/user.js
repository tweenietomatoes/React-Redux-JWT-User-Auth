import initialState from './initialStates'

const userReducer = (state = initialState.user , action) => {
    switch (action.type) {
        case "LOGIN_USER":
           return true
        case "LOGOUT_USER":
           return false
           default:
            return state
    }
}

export default userReducer