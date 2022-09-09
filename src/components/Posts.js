import Reactgit  from 'react';

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
                            <button>View</button>
                            <button>Delete</button>
                            <button>Edit</button>
                            </>
                        ) : (
                            <button>View</button>
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