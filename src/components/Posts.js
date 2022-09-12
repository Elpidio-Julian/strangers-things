import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { deactivatePost } from '../api';



const Posts = ({ posts, token, fetchPosts }) => {
    const [confirmDel, setConfirmDel] = useState(false)
    const [searchTerm, setSearchTerm] = useState('');
    // search form which will create a new array of filtered posts
    const postMatches = (post, text) => {
        if(post.title.toUpperCase().includes(text.toUpperCase())) return true

    }
    const filteredPosts = posts.filter(post => postMatches(post, searchTerm))
    const postsToDisplay = searchTerm.length ? filteredPosts : posts;
    async function deletePost({token, _id}) {
        await deactivatePost({token, _id});
    }
    return (
        <div className='postsPageDiv'>
        <div className='postsDiv'>
            <form>
                <label>Search</label>
                <input className='textInput' type='text' onChange={(event) => setSearchTerm(event.target.value)}/>
            </form>
       {
        postsToDisplay.map((post) => {
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
                            <Link className='postButtons' to={`/posts/${_id}`}>View</Link>
                            {
                                confirmDel ? (
                                    <button className='postButtons' onClick={() => {
                                        deletePost({token, _id})
                                        fetchPosts();
                                    }}>Confirm Delete</button>
                                    ) : (
                                    <button className='postButtons' onClick={() => setConfirmDel(true)}>Delete</button>
                                    )
                                }
                            <Link className='postButtons' to={`/posts/edit-posts/${_id}`}>Edit</Link>
                            </>
                        ) : (
                            <Link className='postButtons' to={`/posts/${_id}`}>View</Link>
                        )
                    }
                </div>
            )
        })
       }
       </div>
       <div>
       <Link className='createPostButton' to={'/posts/create-post'}>Add a new Post</Link>
       </div>
       </div>
    )
}

export default Posts;