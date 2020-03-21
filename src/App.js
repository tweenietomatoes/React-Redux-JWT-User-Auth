import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom"

import Home from "./components/Home"
import Login from "./components/Login"
import Logout from "./components/Logout"
import Posts from "./components/Posts"

import { useSelector, useDispatch } from "react-redux"

import { logoutUser } from "./redux/actions/userAction"

function App() {

  const dispatch = useDispatch()
  const isLoggedIn = useSelector(state => state.userReducer)

  const handleLogout = () => {
    dispatch(logoutUser())
  }

  return (
    <Router>
      <Link to="/">Home</Link>
      {!isLoggedIn ? <Link to="/login">Login</Link> : null}
      {isLoggedIn ? <button onClick={handleLogout}>Logout</button> : null}
      {isLoggedIn ? <Link to="/posts">Posts</Link> : null}

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login isLoggedIn={isLoggedIn} />
        </Route>
        <PrivateRoute path="/logout">
          <Logout />
        </PrivateRoute>
        <PrivateRoute path="/posts">
          <Posts />
        </PrivateRoute>
        <Route path="*">
          <h1>No match</h1>
        </Route>
      </Switch>
    </Router>
  );



  function PrivateRoute({ children, ...rest }) {
    return (
      <Route
        {...rest}
        render={({ location }) =>
          isLoggedIn ? (
            children
          ) : (
              <Redirect
                to={{
                  pathname: "/login",
                  state: { from: location }
                }}
              />
            )
        }
      />
    );
  }


}



export default App;



