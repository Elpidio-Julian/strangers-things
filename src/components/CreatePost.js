import React from 'react'
import { createPost } from '../api'


const CreatePost = ({ token }) => {
    const newPost = {
        title: 'hello',
        description:'testing',
        price: 'free',
        location: 'unknown',
        willDeliver: true
    }

    async function addPost() {
        const result = await createPost(token, newPost)
    }
    return (
        <button onClick={() => addPost()}>add post</button>
    )
}

export default CreatePost