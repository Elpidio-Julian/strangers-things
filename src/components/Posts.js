import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { deactivatePost } from '../api';


const Posts = ({ posts, token, fetchPosts }) => {
    const [confirmDel, setConfirmDel] = useState(false)
    console.log(posts)
    async function deletePost({token, _id}) {
        await deactivatePost({token, _id});
    }
    return (
        <div>
            <Link to={'/posts/create-post'}>Add a new Post</Link>
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
                            {
                                confirmDel ? (
                                    <button onClick={() => {
                                        deletePost({token, _id})
                                        fetchPosts();
                                    }}>Confirm Delete</button>
                                    ) : (
                                    <button onClick={() => setConfirmDel(true)}>Delete</button>
                                    )
                                }
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