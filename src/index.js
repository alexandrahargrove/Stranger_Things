import React from 'react';
import ReactDOM from 'react-dom';
import {useReducer, useState} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';



import {
    Accountform,
  } from './components';


const App = () => {
    const [token, setToken] = useState('');
    const [user, setUser] = useState({});


return <>
        <h1>
            Strangers Things
        </h1>
        {user.username && <div>Hello {user.username}</div> }
        <Route path="/login">
        <Accountform type={'login'} setToken={setToken} setUser={setUser}/>
        </Route>
        <Route path="/register">
        <Accountform type={'register'} setToken={setToken} setUser={setUser}/>
        </Route>

    </> 


}


ReactDOM.render(
    <Router>
    <App />
    </Router>,
    document.getElementById('app'),
);