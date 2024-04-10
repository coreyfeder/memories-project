import React from 'react'
import Post from './Post/Post.jsx'
import {useSelector} from 'react-redux'
// import styles from "./styles.jsx"


function Posts() {
  const posts = useSelector((state)=> state.posts)
  console.log(posts)

  return (
    <>
    <h1>Posts</h1>
     <Post />
     <Post />
    </>
  )
}

export default Posts
