import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import NavBar from './Componants/Navbar/Navbar';
import HomePage from './Pages/Homepage/homepage';
import AboutPage from './Pages/Aboutpage/aboutpage';
import EnrollmentPage from './Pages/Enrollment/enrollmentpage';
import VpK from './Pages/VPK/vpk';
import FaQ from './Pages/FAQ/faq';
import ContactUs from './Pages/ContactUs/contactus';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/about' component={AboutPage}/>
        <Route exact path='/enrollment' component={EnrollmentPage}/>
        <Route exact path='/vpk' component={VpK}/>
        <Route exact path='/faq' component={FaQ}/>
        <Route exact path='/contactus' component={ContactUs}/>
      </Switch>

    </div>
  );
}

export default App;
