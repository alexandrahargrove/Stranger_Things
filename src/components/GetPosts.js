import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import MessageForm from './Message'
import DeletePost from './DeletePost'


const GetPosts = ({token, setUser}) => {
    const [listOfPosts, setPosts] = useState([])
    const fetchPosts = async () => {
        const reponse = await fetch('https://strangers-things.herokuapp.com/api/2010-CPU-RM-WEB-PT/posts', {
             headers: {
             'Authorization': `Bearer ${token}`
             }
         })
         const {data: {posts}} = await reponse.json()
         setPosts(posts);
    }
    useEffect (() => {
        fetchPosts();
    }, [])

    return (<>
    <h1 id="post-header">POSTS
    {       token ? <Link id="add-post" to="/new-post">(ADD POST)</Link> : ''
} </h1>


    {
        listOfPosts.map(post => {
            const {title, price, location, description, createdAt, _id, author, isAuthor, willDeliver} = post;
            return (
                <div key={_id} className='post-container'>
                    <div className='post'>
                    <h3 id="post-title">{title}</h3>
                    <br />
                    <p><b>Price:</b> {price}</p>
                    <br />
                    <p><b>Description:</b> {description}</p>
                    <br />
                    <p><b>Location:</b> {location}</p>
                    <br />
                    <p><b>Will Deliver?</b> { willDeliver === true ? 'Yes' : 'No'}</p>
                    <br />
                    <p><b>Seller:</b> {author.username}</p>
                    <br />
                    <p id="created-at">Created At: {createdAt}</p>
                    
                    {

                        isAuthor === true ? <DeletePost id={_id} token={token} fetchPosts={fetchPosts}/> : ''
                    }

                    {
                           token && !isAuthor ? <MessageForm token={token} setUser={setUser} postId={_id}/> : ''
                    }
                    </div>
</div>
            )
        })
    }

    </>)



}









export default GetPosts;