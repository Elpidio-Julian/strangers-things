import React from 'react';

const Profile = ({ user }) => {
    const messages = user.messages;
    const userID = user._id;
    return (
        <div>
            <div>
                <h1>Messages from other users!</h1>
                {
                messages.map((message) => {
                    const fromUserID = message.fromUser._id;
                    const {username} = message.fromUser;
                    const {title} = message.post;
                    if (userID !== fromUserID ) {
                    return(
                        <div key={message._id}>
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
                messages.map((message) => {
                    const fromUserID = message.fromUser._id;
                    if (userID === fromUserID )
                    return(
                        <div key={message._id}>{message.content}</div>
                    )
                })
          }
            </div>
        </div>
    )
}

export default Profile;