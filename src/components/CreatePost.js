import React, { useState } from 'react'
import { createPost } from '../api'


const CreatePost = ({ token, fetchPosts, navigate }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [location, setLocation] = useState('');
    const [willDeliver, setWillDeliver] = useState(false);

    const newPost = {
        title,
        description,
        price,
        location,
        willDeliver,
    }

    async function addPost() {
        const result = await createPost(token, newPost)
        fetchPosts();
        navigate('/posts')
    }
    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            addPost()}}>
            <input type='text' placeholder='title' value={title} onChange={(event) => setTitle(event.target.value)}/>
            <input type='text' placeholder='description' value={description} onChange={(event) => setDescription(event.target.value)}/>
            <input type='text' placeholder='price' value={price} onChange={(event) => setPrice(event.target.value)}/>
            <input type='text' placeholder='location' value={location} onChange={(event) => setLocation(event.target.value)}/>
            <input
            type='checkbox'
            onChange={(event) => setWillDeliver(event.target.checked)}
            />
            <button type='submit'>Confirm add post</button>
        </form>
    )
}

export default CreatePost