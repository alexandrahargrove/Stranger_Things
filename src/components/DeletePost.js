import React from 'react'

const DeletePost = ({token, id, fetchPosts}) => {
const handleDelete = async () => {
    const response = await fetch (`https://strangers-things.herokuapp.com/api/2010-CPU-RM-WEB-PT/posts/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    })
    console.log(response)
    fetchPosts()
}

return <button onClick={handleDelete}>DELETE</button>
}





export default DeletePost;