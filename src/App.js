import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import QuienesSomos from './components/pages/QuienesSomos';
import Servicios from './components/pages/Servicios';
import Contactenos from './components/pages/Contactenos';
function App() {
  return (
    <>
    <Router>
      <Navbar></Navbar>
      <Switch>
      <Route path='/' exact component={Home} />
          <Route path='/QuienesSomos' component={QuienesSomos} />
          <Route path='/Servicios' component={Servicios} />
          <Route path='/Contactenos' component={Contactenos} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
