import React from 'react'
import { useParams } from 'react-router-dom'

const SinglePostView = ({ posts }) => {
    const { id } = useParams();

    const [currentPost] = posts.filter(post => post._id === id);

    const { title, description, location, price, willDeliver } = currentPost;
    console.log(currentPost)
    console.log(id)
    return (
        <div>
            <h3>{title}</h3>
            <p>Description: {description}</p>
            <p>Location: {location}</p>
            <p>Price: {price}</p>
            <p>Will Deliver: {willDeliver}</p>
        </div>
    )
}

export default SinglePostView