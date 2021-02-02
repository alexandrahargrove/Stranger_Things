import React from 'react';
import ReactDOM from 'react-dom';
import {useReducer, useState} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';



import {
    Accountform,
    GetPosts,
    CreatePostForm,
    // Home
  } from './components';


const App = () => {
    const [token, setToken] = useState('');
    const [user, setUser] = useState({});


return <>

<header>
<h1>Strangers Things</h1>
<nav id="navigation">
    <Link to="/">Home</Link> | <Link to="/posts">Posts</Link> | <Link to="/login">Login</Link>
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
        <GetPosts token={token}/>
        </Route> 
        <Route path="/new-post">
        <CreatePostForm token={token} setUser={setUser}/>
        </Route>

    </> 


}


ReactDOM.render(
    <Router>
    <App />
    </Router>,
    document.getElementById('app'),
);