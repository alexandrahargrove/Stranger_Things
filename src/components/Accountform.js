import React from 'react';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import { useHistory } from "react-router-dom";

const Accountform = ({type, setToken, setUser}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const formtitle = type === 'login' ? 'Login' : 'Register';
    const oppositeTitle = type === 'login' ? 'Register' : 'Login';
    const oppositeType = type === 'login' ? 'register' : 'login';

    const submitClick = async (event) => {
        console.log('clicked')
        event.preventDefault();
        const response = await fetch(`https://strangers-things.herokuapp.com/api/2010-CPU-RM-WEB-PT/users/${type}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            user: {
                username,
                password
            }
        })
    })
    
    ;



    const {data} = await response.json(); 
    console.log({data})
    const token = data?.token;
    if (token) {
        setToken(token);
        const reponse = await fetch(`https://strangers-things.herokuapp.com/api/2010-CPU-RM-WEB-PT/users/me`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });
        const {data} = await reponse.json();
        console.log(data);
        setUser(data);
    }
    setUsername('');
    setPassword('');
    }



    return <>
        <h2>{formtitle}</h2>
        <div className="login-form" >
        <form onSubmit={submitClick}>
            <input type="text" value={username} onChange={(ev) => setUsername(ev.target.value)} placeholder="username" required></input>
            <br />
            <input type="password" value={password} onChange={(ev) => setPassword(ev.target.value)} placeholder="password" required></input>
            <br />
            <button type="submit">{formtitle}</button>
        </form>
        <p> <Link to={`/${oppositeType}`}> {
            oppositeType === 'login' ? 'Already have an account?' : `Don't have an account?`
    } {oppositeTitle} here. </Link></p>
    </div>
        </>
}



export default Accountform;