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
<form onSubmit={onSubmit} id="send-message-form">
<textarea id="text" value={message} onChange={(event) => {
    setMessage(event.target.value);
}} placeholder="Type message to seller here"></textarea>
<br />
<button type="submit" id="send-message-button"> SEND MESSAGE</button>
</form>
</>


}





export default MessageForm;