import './App.css';
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Pages/Home';


function App() {
  return (
    <>
      
        <Router>
          <Navbar />

          <Switch>
              <Route path='/' exact component={Home}/>
          </Switch>
        </Router>
      
    </>
  );
}

export default App;
