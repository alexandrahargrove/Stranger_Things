import React, {useState} from 'react';

const MessageForm = ({token, postId}) => {
const [message, setMessage] = useState('');


const onSubmit = async (event) => {
event.preventDefault();
const reponse = await fetch(`https://strangers-things.herokuapp.com/api/2010-CPU-RM-WEB-PT/posts/${postId}/messages`, {
    method: "POST",
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    },
        body: JSON.stringify({
            message: {
                content: message
            }
        })
    });

const {data} = await reponse.json();
console.log(data)
setMessage('');
}

return <>
<form onSubmit={onSubmit}>
<input type="text" value={message} onChange={(event) => {
    setMessage(event.target.value);
}} placeholder="Type message here"></input>
<button type="submit">SEND MESSAGE</button>
</form>
</>


}





export default MessageForm;