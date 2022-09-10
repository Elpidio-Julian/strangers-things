import React, {useState} from 'react';
import { useParams } from 'react-router-dom'


const EditPost = ({ posts }) => {
    const [newTitle, setNewTitle] = useState(title);
    const [newDescription, setNewDescription] = useState(description);
    const [newLocation, setNewLocation] = useState(location);
    const [newWillDeliver, setNewWillDeliver] = useState(willDeliver)

    const { id } = useParams();
    const [currentPost] = posts.filter(post => post._id === id);
    const { title, description, location, price, willDeliver } = currentPost;

    async function editPost() {
        const updatedPost = {
            newTitle,
            newDescription,
            newLocation,
            newPrice,
            newWillDeliver,
        }
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
            type='checkbox'
            placeholder={newWillDeliver}
            onChange={(event) => setNewWillDeliver(event.target.checked)}
            />
            <button type='submit'>Edit Post</button>
        </form>
        )
}

export default EditPost;