import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';


const GetPosts = ({token}) => {
    const [listOfPosts, setPosts] = useState([])
    useEffect (async () => {
        if (token) {
         const reponse = await fetch('https://strangers-things.herokuapp.com/api/2010-CPU-RM-WEB-PT/posts', {
             headers: {
             'Authorization': `Bearer ${token}`
             }
         })
         const {data: {posts}} = await reponse.json()
         {<Link to="/new-post">Add Post</Link>}
         setPosts(posts)
        }
        //  else {
        //     const reponse = await fetch (`https://strangers-things.herokuapp.com/api/2010-CPU-RM-WEB-PT/posts`)
        //     const {data: {posts}} = await reponse.json()
        //     setPosts(posts)
        // }
    }, [])

    return (<>
    <h1>Posts</h1>
    
    {
        listOfPosts.map(post => {
            console.log(post)
            const {title, price, location, description, createdAt, _id, author, isAuthor} = post;
            return (
                <div key={_id} className='post'>
                    <h3>Title: {title}</h3>
                    <p>Price: {price}</p>
                    <p>Location: {location}</p>
                    <p>Description: {description}</p>
                    <p>Created At: {createdAt}</p>
                    <p>Seller: {author.username}</p>
                    <button>{
                        isAuthor === false ? `SEND MESSAGE` : 'EDIT / DELETE'
                        }
                    </button>
                </div>
            )
        })
    }

    </>)
}



export default GetPosts;