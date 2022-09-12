import React from 'react';

const Profile = ({ user }) => {
    const messages = user.messages;
    const userID = user._id;
    console.log(user)
    return (
        <div className='profileDiv'>
        <div className='profileInfo'>
            <h1>Welcome Back {user.username}</h1>
        </div>
        <div>
            <div>
                <h2>Messages from other users!</h2>
                {
                messages && messages.map((message) => {
                    const fromUserID = message.fromUser._id;
                    const {username} = message.fromUser;
                    const {title} = message.post;
                    if (userID !== fromUserID ) {
                    return(
                        <div className='incomingMsgs' key={message._id}>
                            <p>From user: {username}</p>
                            <p>Message: {message.content}</p>
                            <p>Post Reference: {title}</p>
                        </div>
                    ) }
                })
          }
            </div>
            <div>
                <h1>Messages from you</h1>
                {
                messages && messages.map((message) => {
                    const fromUserID = message.fromUser._id;
                    if (userID === fromUserID )
                    return(
                        <div className='outgoingMsgs' key={message._id}>
                            <h2>Post Title: {message.post.title}</h2>
                            <p>{message.content}</p>
                        </div>
                    )
                })
          }
            </div>
        </div>
        </div>
    )
}

export default Profile;