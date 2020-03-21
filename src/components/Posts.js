import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchPosts } from ".././redux/actions/postsAction"

const Posts = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch])

    const posts = useSelector(state => state.postsReducer)

    return (
        <>
        <h1>Posts</h1>
    <ul>{ posts.map( post=> (<li key={post.id}>{post.title}</li>) ) }</ul>
        </>
        )
}

export default Posts