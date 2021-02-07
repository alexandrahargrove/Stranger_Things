import {React, useState, useEffect} from 'react';




const MessagesForProfile = ({token, user}) => {
    const [myMessages, setMyMessages] = useState(user.messages ? user.messages : [])

    return (<>
    {
        myMessages.map((message, index) => {
            console.log(message)
            return message.fromUser.username === user.username ? (
            <div className='messages-from-me' key={index}>
            <h1>{message.post.title}</h1>
            <p>{message.content}</p>
            <p>{message.fromUser.username}</p>
            </div>
            ) :
            <div className='messages-to-me' key={index}>
            <h1>{message.post.title}</h1>
            <p>{message.content}</p>
            <p>From: {message.fromUser.username}</p>
            </div>
        })
    }
    </>)
}



export default MessagesForProfile;