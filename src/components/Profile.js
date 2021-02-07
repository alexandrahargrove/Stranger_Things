import React, {useState, useEffect} from 'react';
import MessagesForProfile from './MessagesForProfile'
import DeletePost from './DeletePost'



const Profile = ({token, setUser, user}) => {
    const [listOfPosts, setPosts] = useState(user.posts ? user.posts : [])


    const fetchUserPosts = async () => {
        const reponse = await fetch(`https://strangers-things.herokuapp.com/api/2010-CPU-RM-WEB-PT/users/me`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });
        const {data} = await reponse.json();
        setUser(data);
        setPosts(data.posts)
    }


    return (<>
        <h1>My Posts:</h1>
    
        {
            listOfPosts.map((post, index) => {
                const {title, price, location, description, createdAt, author, isAuthor, _id, active} = post;
console.log(active)
               return active ? (
                    <div key={index} className='post-container'>
                        <div className="profile-post">
                        <h3 id='post-title'>{title}</h3>
                        <p><b>Price:</b> {price}</p>
                        <br />
                        <p><b>Location:</b> {location}</p>
                        <br />
                        <p><b>Description:</b> {description}</p>
                        <br />
                        <p id="created-at"><b>Created At:</b> {createdAt}</p>
                        {
    
                            <DeletePost id={_id} token={token} fetchPosts={fetchUserPosts}/>
                        }
    </div>
    </div>
                ) : null;
            })
        }
            <h1>Messages:</h1>
            <MessagesForProfile user={user} token={token}/> 
        </>)
    
    
    
    }






        

export default Profile;