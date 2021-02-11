import {React, useState, useEffect} from 'react';




const MessagesForProfile = ({token, user}) => {
    const [myMessages, setMyMessages] = useState(user.messages ? user.messages : [])

    return (<div id="message-container">
    {
        myMessages.map((message, index) => {
            return message.fromUser.username === user.username ? (
        
            <div className='messages-from-me' key={index}>
            <h3>{message.post.title}</h3>
            <p>{message.content}</p>
            <p>From: Me</p>
            </div>
            ) :
            <div className='messages-to-me' key={index}>
            <h3>{message.post.title}</h3>
            <p>{message.content}</p>
            <p>From: {message.fromUser.username}</p>
            </div>
        })
    }
    </div>)
}



export default MessagesForProfile;