import React from 'react'
import { useNavigate } from 'react-router-dom'
import { createPost } from '../api'


const CreatePost = ({ token, navigate }) => {
    const newPost = {
        title: 'hello',
        description:'testing',
        price: 'free',
        location: 'unknown',
        willDeliver: true
    }

    async function addPost() {
        const result = await createPost(token, newPost)
        navigate('/posts')
    }
    return (
        <button onClick={() => addPost()}>add a new post</button>
    )
}

export default CreatePost