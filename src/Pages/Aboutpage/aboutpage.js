import React from 'react';
import './aboutpage.styles.css';
import { brochure } from '../../Assets/data';
import biblePic from '../../Images/christian_preschool.png';
import happyKids from '../../Images/happy_kids.jpg'
import Footer from '../../Componants/Footer/Footer';

const intro = brochure[0]


const AboutPage = () => (
     
    <div className="about-page">
        <h1 className="title">Our School</h1>
        <div className="intro-container">
            <p className="text">{intro.intro1}</p> 
            <img className="about-image" alt="kids with Bible" src={biblePic} height='250px' width='406px'/>  
        </div>
        <div className="intro-container">
            <img className="about-image" alt="kids smiling" src={happyKids} height='250px' width='406px'/>
            <p className="text">{intro.intro2}</p>
        </div>
        <div className="intro-container">
            <p className="text">{intro.intro3}</p>
            <div className="lock">
            <i className="fas fa-lock"></i>
            </div>
        </div>
        <Footer/>
        
        
    </div>
)

export default AboutPage;