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
    <h1>Posts</h1>

    {
        listOfPosts.map(post => {
            const {title, price, location, description, createdAt, _id, author, isAuthor} = post;
            return (
                <div key={_id} className='post-container'>
                    <div className='post'>
                    <h3>Title: {title}</h3>
                    <p>Price: {price}</p>
                    <p>Location: {location}</p>
                    <p>Description: {description}</p>
                    <p>Created At: {createdAt}</p>
                    <p>Seller: {author.username}</p>
                    {
                        // isAuthor === false? <button>VIEW</button> : 
                        // <div><button>EDIT</button><button>DELETE</button></div>

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