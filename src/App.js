import './App.css';
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Pages/Home';
import Patient from './Components/Pages/Patient';
import Create from './Components/Pages/Create';

import ProyectoState from './Context/Patient/PatientState';

function App() {
  return (
    <>
      <ProyectoState>
        <Router>

          <Navbar />

          <Switch>
              <Route path='/' exact component={Home}/>
              <Route path='/Paciente' component={Patient}/>
              <Route path='/Ingreso' component={Create}/>
          </Switch>
        </Router>
      </ProyectoState>
    </>
  );
}

export default App;
