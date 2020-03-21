const initialState = sessionStorage.token

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN_USER":
           sessionStorage.setItem('token', action.payload.token)
           return state
        case "LOGOUT_USER":
           sessionStorage.setItem('token', "") 
           return state
           default:
            return state
    }
}

export default userReducer