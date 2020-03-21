import React from 'react';
import {useDispatch, useSelector} from "react-redux"
import { loginUser, logoutUser } from "./redux/actions/userAction"
import { fetchPosts } from "./redux/actions/postsAction"

function App() {

  const dispatch = useDispatch()
  const token = useSelector(state => state.userReducer)
  const post = useSelector(state => state.postsReducer)

  const handleLogin = () => {
    dispatch(loginUser({ email : "", password : ""}))
  }

  const handleLogout = () => {
    dispatch(logoutUser())
  }

  const getPosts = () => {
    dispatch(fetchPosts({token}))
    console.log(post)
  }

  const posts = post.map(post => ( <li key={post.id}>{post.title}</li>))

  return (
    <>
      <button onClick={handleLogin}> Login </button>
      <button onClick={handleLogout}> Logout </button>
      <button onClick={getPosts}> Fetch </button>
      {token}
      <hr/>
      { posts.length > 0 ? posts : "no todos" }
    </>
  );
}

export default App;
