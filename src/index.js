import React from 'react';
import ReactDOM from 'react-dom';
import {useReducer, useState} from 'react';
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom';
import { useHistory } from "react-router-dom";



import {
    Accountform,
    GetPosts,
    CreatePostForm,
    Profile,
    MessagesForProfile,
    Home
  } from './components';


const App = () => {
    const [token, setToken] = useState('');
    const [user, setUser] = useState({});


return <>

<header>
<nav id="navigation">
<img id="logo" src="/strangers-things-logo.png"></img>
    <div id="links">
        <Link to="/home">Home</Link> 
    <Link to="/posts"> Posts</Link> {
       token ?  <Link to="/profile"> Profile</Link> : ''
    } <Link onClick={() => {
       if (token) {
       setToken('')
        setUser({})
       }
    }} to="/login">{
    token ? 'Logout' : 'Login'}  
    </Link> 
    <br />
    {user.username && <div id="logged-in-as">Logged in as {user.username}</div> }
    </div>
</nav>
</header>

{/* {user.username && <div id="logged-in-as">Logged in as {user.username}</div> } */}

<Route path="/home">
    <Home />
</Route>

<Route exact path="/">
    <Redirect to="/home" />
</Route>
        <Route path="/login">
        <Accountform type={'login'} setToken={setToken} setUser={setUser}/>
        </Route>
        <Route path="/register">
        <Accountform type={'register'} setToken={setToken} setUser={setUser}/>
        </Route>
        <Route path="/posts">
        {/* {token ? <Link id="add-post" to="/new-post">Add Post</Link> : ''} */}
        <GetPosts token={token} setUser={setUser}/>
        </Route> 
        <Route path="/new-post">
        <CreatePostForm token={token} setUser={setUser}/>
        </Route>
        <Route path="/profile">
        <Profile user={user} token={token} setUser={setUser} />
        </Route>
    </> 


}


ReactDOM.render(
    <Router>
    <App />
    </Router>,
    document.getElementById('app'),
);