import React, {useState} from 'react';
import { Navigate, useParams } from 'react-router-dom'
import { updatePost } from '../api';


const EditPost = ({ posts, token, navigate, fetchPosts }) => {
    
    const { id } = useParams();
    const [currentPost] = posts.filter(post => post._id === id);
    const { title, description, location, price, willDeliver } = currentPost;
    
    const [newTitle, setNewTitle] = useState(title);
    const [newDescription, setNewDescription] = useState(description);
    const [newLocation, setNewLocation] = useState(location);
    const [newWillDeliver, setNewWillDeliver] = useState(willDeliver);
    const [newPrice, setNewPrice] = useState(price);
    

    async function editPost() {
        const updatedPost = {
            title: newTitle,
            description: newDescription,
            location: newLocation,
            price: newPrice,
            willDeliver: newWillDeliver,
            id,
        }
        const response = await updatePost(token, updatedPost)
        console.log(response)
    }

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            editPost();
            fetchPosts();
            navigate('/posts')
        }}>
            <input
            className='textInput'
            type='text'
            placeholder={title}
            onChange={(event) => setNewTitle(event.target.value)}
            />
            <input
            className='textInput'
            type='text'
            placeholder={description}
            onChange={(event) => setNewDescription(event.target.value)}
            />
            <input
            className='textInput'
            type='text'
            placeholder={location}
            onChange={(event) => setNewLocation(event.target.value)}
            />
            <input
            className='textInput'
            type='text'
            placeholder={price}
            onChange={(event) => setNewPrice(event.target.value)}
            />
            <input
            type='checkbox'

            onChange={(event) => setNewWillDeliver(event.target.checked)}
            />
            <button type='submit'>Edit Post</button>
        </form>
        )
}

export default EditPost;