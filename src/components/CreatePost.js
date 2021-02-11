import React from 'react';
import {useState} from 'react'


const CreatePostForm = ({token}) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [location, setLocation] = useState('')
    const [willDeliver, setWillDeliver] = useState(false)

    const addPost = async (event) => {
        event.preventDefault();
        const response = await fetch(`https://strangers-things.herokuapp.com/api/2010-CPU-RM-WEB-PT/posts`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
                body: JSON.stringify({
                    post: {
                        title,
                        description,
                        price,
                        location,
                        willDeliver: willDeliver
                    }
                })
        });
        const data = await response.json();

        setTitle('');
        setDescription('');
        setPrice('');
        setLocation('');
        setWillDeliver(false)
    }


return <div id="create-post">
<form id="add-post-form" onSubmit={addPost}>
    <h1 id="create-post-title">Create Post</h1>
    <textarea value={title} onChange={(ev) => setTitle(ev.target.value)} placeholder="title" required></textarea>
    <br />
    <textarea id="description" value={description} onChange={(ev) => setDescription(ev.target.value)} placeholder="description" required></textarea>
    <br />
    <textarea id="price" value={price} onChange={(ev) => setPrice(ev.target.value)} placeholder="price" required></textarea>
    <textarea id="location" value={location} onChange={(ev) => setLocation(ev.target.value)} placeholder="location"></textarea>
    <br />
    <span id="checkbox">Willing to deliver? </span>
     <input type="checkbox" value={willDeliver} onChange={(event) => {
        setWillDeliver(true)
    }}id="delivery"></input>
    <br />
    <button id="create-post-button" type="submit">Create Post</button>
</form>
</div>
}



export default CreatePostForm; 