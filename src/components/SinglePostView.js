import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const SendMessage = () => {
    const [message, setMessage] = useState('')


    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            console.log('message submit', message)
        }}>
            <input type='text' placeholder='Enter Message Here' onChange={(event) => setMessage(event.target.value)}/>
        </form>
    )
}


const SinglePostView = ({ posts }) => {
    const [activateMessage, setActivateMessage] = useState(false);

    const { id } = useParams();

    const [currentPost] = posts.filter(post => post._id === id);

    const { title, description, location, price, willDeliver } = currentPost;
    console.log(currentPost)
    console.log(id)
    return (
        <div>
            <div>
                <h3>{title}</h3>
                <p>Description: {description}</p>
                <p>Location: {location}</p>
                <p>Price: {price}</p>
                <p>Will Deliver: {willDeliver}</p>
            </div>
            <div>
                <button onClick={() => setActivateMessage(!activateMessage)}>Message this user</button>
                {
                    activateMessage && <SendMessage />
                }
            </div>
        </div>
    )
}

export default SinglePostView