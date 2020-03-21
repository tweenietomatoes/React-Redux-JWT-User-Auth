export const loginUser = ({email, password}) => {
    return dispatch => {
      fetch('http://YOUR_URL/api/login', {
        method: 'POST',
        headers: { 'Content-Type' : 'application/json' },
        body : JSON.stringify({email, password})
      })
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        return dispatch({
          type: 'LOGIN_USER',
          payload: { token : data.access_token }
        })
      })
      .catch((err) => {
        return console.log(err)
      })
    }
 } 

 export const getUser = () => {
   return {
     type: 'GET_USER',
     payload : null
   }
 }

 export const logoutUser = () => {
   //TODO: Logout user from api with fetch
   return {
     type: 'LOGOUT_USER',
     payload: null
   }
 }
