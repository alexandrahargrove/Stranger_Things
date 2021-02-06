import {React, useState, useEffect} from 'react';




const MessagesForProfile = ({token, setUser}) => {
    const [myMessages, setMyMessages] = useState([])
    useEffect (async () => {
        const reponse = await fetch('https://strangers-things.herokuapp.com/api/2010-CPU-RM-WEB-PT/users/me', {
         method: 'GET',
         headers: {
        'Content-Type':'application/json',
        'Authorization': `Bearer ${token}`
         }
     })
     const data = await reponse.json()
     console.log(data.data.messages);
     setMyMessages(data.data.messages)
     setUser(data.data.username)
    }, [token])

    return (<>
    <h1>Messages:</h1>
    {
        myMessages.map((message, index) => {
            return (
            <div key={index}>
            <h1>{message.content}</h1>
            </div>
            )
        })
    }
    </>)
}



export default MessagesForProfile;