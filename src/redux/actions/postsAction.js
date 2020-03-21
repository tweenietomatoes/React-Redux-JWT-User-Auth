export const fetchPosts = () => {
  return dispatch => {
    return fetch("API_URL",{
      headers: { 
        'Content-Type' : 'application/json',
        'Authorization' : `Bearer ${sessionStorage.token}`
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


