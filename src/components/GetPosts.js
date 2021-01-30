import React, {useState, useEffect} from 'react';


const GetPosts = () => {
    const [listOfPosts, setPosts] = useState([])
    useEffect (async () => {
        const reponse = await fetch('https://strangers-things.herokuapp.com/api/2010-CPU-RM-WEB-PT/posts')
        const {data: {posts}} = await reponse.json()
        console.log(posts)
        setPosts(posts)
    }, [])

    return (<>
    <h1>Posts</h1>
    {
        listOfPosts.map(post => {
            console.log(post)
            const {title, price, location, description, createdAt, _id, author} = post;
            return (
                <div key={_id} className='post'>
                    <h3>Title: {title}</h3>
                    <p>Price: {price}</p>
                    <p>Location: {location}</p>
                    <p>Description: {description}</p>
                    <p>Created At: {createdAt}</p>
                    <p>Seller: {author.username}</p>
                </div>
            )
        })
    }

    </>)
}



export default GetPosts;