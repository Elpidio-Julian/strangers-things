import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { deliverMessage } from '../api'

const SendMessage = ({ id, token, navigate, getMe }) => {
    const [message, setMessage] = useState('')

    async function sendMessage() {
        await deliverMessage({token, message, id})
    }

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            sendMessage()
            getMe()
            navigate('/profile')
            

        }}>
            <input type='text' placeholder='Enter Message Here' onChange={(event) => setMessage({content: event.target.value})}/>
            <button type='submit'>send message</button>
        </form>
    )
}


const SinglePostView = ({ posts, token, getMe, navigate }) => {
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
                    activateMessage && <SendMessage id={id} token={ token } getMe={ getMe } navigate={ navigate }/>
                }
            </div>
        </div>
    )
}

export default SinglePostView