import React, {useState} from 'react';
import { useParams } from 'react-router-dom'
import { updatePost } from '../api';


const EditPost = ({ posts, token }) => {
    const [newTitle, setNewTitle] = useState(title);
    const [newDescription, setNewDescription] = useState(description);
    const [newLocation, setNewLocation] = useState(location);
    const [newWillDeliver, setNewWillDeliver] = useState(willDeliver);
    const [newPrice, setNewPrice] = useState(price);

    const { id } = useParams();
    const [currentPost] = posts.filter(post => post._id === id);
    const { title, description, location, price, willDeliver } = currentPost;

    async function editPost() {
        const updatedPost = {
            title: newTitle,
            description: newDescription,
            location: newLocation,
            price: newPrice,
            willDeliver: newWillDeliver,
        }
        await updatePost(token, updatedPost, id)
        console.log(updatedPost)
    }

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            console.log('form submitted')
        }}>
            <input
            type='text'
            placeholder={title}
            onChange={(event) => setNewTitle(event.target.value)}
            />
            <input
            type='text'
            placeholder={description}
            onChange={(event) => setNewDescription(event.target.value)}
            />
            <input
            type='text'
            placeholder={location}
            onChange={(event) => setNewLocation(event.target.value)}
            />
            <input
            type='text'
            placeholder={price}
            onChange={(event) => setNewPrice(event.target.value)}
            />
            <input
            type='checkbox'
            placeholder={newWillDeliver}
            onChange={(event) => setNewWillDeliver(event.target.checked)}
            />
            <button type='submit'>Edit Post</button>
        </form>
        )
}

export default EditPost;