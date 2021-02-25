import './App.css';
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Pages/Home';
import Patient from './Components/Pages/Patient';
import Create from './Components/Pages/Create';


function App() {
  return (
    <>
      
        <Router>

          <Navbar />

          <Switch>
              <Route path='/' exact component={Home}/>
              <Route path='/Paciente' component={Patient}/>
              <Route path='/Ingreso' component={Create}/>
          </Switch>
        </Router>
      
    </>
  );
}

export default App;
