import Reactgit  from 'react';

const Posts = ({ posts }) => {

    return (
        <div>
       {
        posts.map((post) => {
            const {description, location, price, title, _id} = post;
            return (
                <>
                    <h3>{title}</h3>
                    <p>Description: {description}</p>
                    <p>Price: {price}</p>
                    <p>Location: {location}</p>
                </>
            )
        })
       }
       </div>
    )
}

export default Posts;