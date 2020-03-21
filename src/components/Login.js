import React, { useEffect } from "react"
import { useFormik } from "formik"
import { useDispatch } from "react-redux"
import { loginUser } from ".././redux/actions/userAction"
import { useHistory } from "react-router-dom"

const Login = (props) => {

    const dispatch = useDispatch()
    const history = useHistory()

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: values => {   
            dispatch(loginUser({ email: values.email, password: values.password }))               
        }
    })
  
    useEffect(()=> {
        if (props.isLoggedIn) {
            history.push("/posts")
        } 
    }, [history, props.isLoggedIn])
  
    return (
        <>
            <h1>Login</h1>
            <form onSubmit={formik.handleSubmit}>
                <input type="text" name="email" placeholder="email" value={formik.values.email} onChange={formik.handleChange} />
                <input type="password" name="password" placeholder="password" value={formik.values.password} onChange={formik.handleChange} />
                <button type="submit">Login</button>
            </form>

          
        </>
    )
}

export default Login