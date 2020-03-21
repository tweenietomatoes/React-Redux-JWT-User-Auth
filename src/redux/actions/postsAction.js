export const fetchPosts = ({token}) => {
  return dispatch => {
    return fetch("http://YOUR_URL/api/",{
      headers: { 
        'Content-Type' : 'application/json',
        'Authorization' : `Bearer ${token}`
      }
    })
    .then(res => res.json())
      .then(data => {
        return dispatch({
          type: "FETCH_POSTS",
          payload: [...data]
        })
      })
      .catch(err => console.log(err))
  }
}


