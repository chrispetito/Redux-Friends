import React from 'react';
import './App.css';
import LogInPage from './components/LogInPage'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import PrivateRoute from './PrivateRoute';
import FriendsList from './components/FriendsList'

function App() {
  return (
    <Router>
    <div className="App">
      <Route path='/login' component={LogInPage} />
      <PrivateRoute exact path='/friendslist' component={FriendsList} />
    </div>
    </Router>
  );
}

export default App;
