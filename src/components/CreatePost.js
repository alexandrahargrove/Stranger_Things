import React from 'react';
import {useState} from 'react'


const CreatePostForm = ({token}) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [location, setLocation] = useState('')
    // const [willDeliver, setWillDeliver] = useState()

    const addPost = async (event) => {
        event.preventDefault();
        console.log(title, description)
        console.log('clicked add post')
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
                        // willDeliver: true
                    }
                })
        });
        const data = await response.json();
        console.log(data)

        setTitle('');
        setDescription('');
        setPrice('');
        setLocation('');
    }


return <>
<form onSubmit={addPost}>
    <h1>Create Post</h1>
    <input type="text" value={title} onChange={(ev) => setTitle(ev.target.value)} placeholder="title" required></input>
    <br />
    <input type="text" value={description} onChange={(ev) => setDescription(ev.target.value)} placeholder="description" required></input>
    <br />
    <input type="text" value={price} onChange={(ev) => setPrice(ev.target.value)} placeholder="price" required></input>
    <br />
    <input type="text" value={location} onChange={(ev) => setLocation(ev.target.value)} placeholder="location"></input>
    <br />
    Willing to deliver?
    <input type="checkbox" id="delivery"></input>
    <br />
    <button type="submit">Create Post</button>
</form>
</>
}



export default CreatePostForm; 