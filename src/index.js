import React from 'react';
import ReactDOM from 'react-dom';
import {useReducer, useState} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { useHistory } from "react-router-dom";



import {
    Accountform,
    GetPosts,
    CreatePostForm,
    Profile
  } from './components';


const App = () => {
    const [token, setToken] = useState('');
    const [user, setUser] = useState({});


return <>

<header id="header">
<nav id="navigation">
<h1>Strangers Things</h1>
    <Link to="/">Home</Link> <Link to="/posts">Posts</Link> {
       token ?  <Link to="/profile">Profile</Link> : ''
    } <Link onClick={() => {
       if (token) {
       setToken('')
        setUser({})
       }
    }} to="/login">{
    token ? 'Logout' : 'Login'}  
    </Link>
</nav>
</header>

{user.username && <div>Logged in as {user.username}</div> }






        {/* <Route path="/home">
            <Home />
        </Route> */}
        <Route path="/login">
        <Accountform type={'login'} setToken={setToken} setUser={setUser}/>
        </Route>
        <Route path="/register">
        <Accountform type={'register'} setToken={setToken} setUser={setUser}/>
        </Route>
        <Route path="/posts">
        {token ? <Link to="/new-post">Add Post</Link> : ''}
        <GetPosts token={token} setUser={setUser}/>
        </Route> 
        <Route path="/new-post">
        <CreatePostForm token={token} setUser={setUser}/>
        </Route>
        <Route path="/profile">
        <Profile setUser={setUser} token={token} />
        </Route>
    </> 


}


ReactDOM.render(
    <Router>
    <App />
    </Router>,
    document.getElementById('app'),
);