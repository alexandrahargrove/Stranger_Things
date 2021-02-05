import React, {useState, useEffect} from 'react';



const Profile = ({token, setUser}) => {
    const [listOfPosts, setPosts] = useState([])
    useEffect (async () => {

         const reponse = await fetch('https://strangers-things.herokuapp.com/api/2010-CPU-RM-WEB-PT/users/me', {
             method: 'GET',
             headers: {
            'Content-Type':'application/json',
            'Authorization': `Bearer ${token}`
             }
         })
        //  const {data} = await reponse.json()
        //  console.log(data)
        const data = await reponse.json()
        console.log(data.data.posts)
        setPosts(data.data.posts);
    }, [])

    return (<>
        <h1>Posts By Me:</h1>
    
        {
            listOfPosts.map((post, index) => {
                console.log(post)
                const {title, price, location, description, createdAt, author, isAuthor} = post;
                return (
                    <div key={index} className='post'>
                        <h3>Title: {title}</h3>
                        <p>Price: {price}</p>
                        <p>Location: {location}</p>
                        <p>Description: {description}</p>
                        <p>Created At: {createdAt}</p>
                        {/* <p>Seller: {author.username}</p> */}
                        {
    
                            isAuthor === true ? <div><button>EDIT</button><button>DELETE</button></div> : ''
                        }
    
    </div>
                )
            })
        }
    
        </>)
    
    
    
    }

export default Profile;