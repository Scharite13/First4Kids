import React from 'react';
import './App.css';
import NavBar from '../src/Componants/Navbar/Navbar';
import Hero from '../src/Componants/Hero/Hero';
import About from '../src/Componants/About/About';
import Footer from '../src/Componants/Footer/Footer';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Hero/>
      <About/>
      <Footer/>

    </div>
  );
}

export default App;
