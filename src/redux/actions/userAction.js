export const loginUser = ({ email, password }) => {
  return dispatch => {
    fetch('API_URL/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    })
      .then(res => {
        if (res.status === 401) {
          return dispatch({ type: 'LOGIN_ERROR' })
        }
        return res.json()
      })
      .then((data) => {
        if (data.access_token) {
          sessionStorage.setItem('token', data.access_token)
          dispatch({
            type: 'LOGIN_USER'
          })
        }
      })
      .catch((err) => {
        return console.log(err)
      })
  }
}

export const getUser = () => {
  return {
    type: 'GET_USER',
    payload: null
  }
}

export const logoutUser = () => {
  //TODO: Logout user from api with fetch
  sessionStorage.clear()
  return {
    type: 'LOGOUT_USER'
  }
}
