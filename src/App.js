import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import NavBar from './Componants/Navbar/Navbar';
import HomePage from './Pages/Homepage/homepage';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
      </Switch>

    </div>
  );
}

export default App;
