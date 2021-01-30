import React from 'react';


const CreatePostForm = () => {
return <>
<form>
    <h1>Create Post</h1>
    <input type="text" placeholder="title" required></input>
    <br />
    <input type="text" placeholder="description" required></input>
    <br />
    <input type="text" placeholder="price" required></input>
    <br />
    <input type="text" placeholder="location" required></input>
    <br />
    Willing to deliver?
    <input type="checkbox" id="delivery"></input>
    <br />
    <button type="submit" onClick={console.log('i am clicking the create post button')}>Create Post</button>
</form>
</>
}



export default CreatePostForm;