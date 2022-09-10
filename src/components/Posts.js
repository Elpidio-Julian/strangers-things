import React from 'react';
import { Link } from 'react-router-dom'

const Posts = ({ posts }) => {

    return (
        <div>
       {
        posts.map((post) => {
            const {description, location, price, title, _id, isAuthor} = post;
            return (
                <div className='post' key={_id}>
                    <h3>{title}</h3>
                    <p>Description: {description}</p>
                    <p>Price: {price}</p>
                    <p>Location: {location}</p>
                    {
                        isAuthor ? (
                            <>
                            <Link to={`/posts/${_id}`}>View</Link>
                            <button>Delete</button>
                            <Link to={`/posts/edit-posts/${_id}`}>Edit</Link>
                            </>
                        ) : (
                            <Link to={`/posts/${_id}`}>View</Link>
                        )
                    }
                </div>
            )
        })
       }
       </div>
    )
}

export default Posts;