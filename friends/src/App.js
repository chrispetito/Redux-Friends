import React from 'react';
import './App.css';
import LogInPage from './components/LogInPage'
import { Route, BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
      <Route component={LogInPage} />
    </div>
    </Router>
  );
}

export default App;
