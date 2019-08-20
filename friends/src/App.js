import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './components/Login'
import FriendsList from './components/FriendsList'
import PrivateRoute from './components/PrivateRoute'

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Welcome</h1>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/protected">Friends Protected Page</Link>
          </li>
        </ul>
        <Route path="/login" component={Login} />
        <PrivateRoute exact path='/protected' component={FriendsList} />
      </div>
    </Router>
  );
}

export default App;
