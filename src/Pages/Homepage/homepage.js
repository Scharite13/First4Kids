import React from 'react';
import Hero from '../../Componants/Hero/Hero';
import About from '../../Componants/About/About';
import Footer from '../../Componants/Footer/Footer';


const HomePage = () => (
    <div className="homepage">
        <Hero/>
        <About/>
        <Footer/>
    </div>
)

export default HomePage;