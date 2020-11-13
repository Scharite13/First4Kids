import React from 'react';
import './About.styles.css';
import logo from "../../Images/LOGO_first-for-kids.png";

function About(){
    return (

        <div className="about-container">
            <div className="about-location">
                <div className='logo'>
                    <img src={logo} alt="first for kids logo" width="93px" height="80px"/>
                </div> 
                <div className="about-location-detail">
                    <h2>First United Methodist Church</h2>
                    <p>603 11th St. W. | Bradenton FL 34205</p>
                    <p>941-748-0824</p>
                    <a href="mailto: derekscharite@gmail.com">Email@gmail.com</a>
                </div>

            </div>
            <div className="about-description-outer">
                <div className="about-description-inner">
                    <h2 className="about-header">First For Kids</h2>
                    <p className="about-content">First For Kids is a licensed general member of the United
                        Methodist Association of Preschools.  The school has been serving the downtown
                        Bradenton community since 1989.  Safety is a top priority for us with our coded access door to our facility.
                        We are a nurturing environment where we strive to prepare children to succeed in school and 
                        life.  We are dedicated to offering learning oportunities for your child to grow intillectually,
                        socially, emotionally, physically, and spiritually.  We also encourage parents to stop in for lunch or on their break
                        to see their child grow!
                    </p>
                </div>
            </div>
            <div className="about-details">
                <div className="about-detail-outer">
                    <div className="about-detail-inner">
                        <p><span>Hours of Operation:</span> 7:30am - 6:00pm</p>
                        
                        <p><span>Ages:</span> 6 weeks to pre-k</p>
                        
                        <ul className='about-list'>
                            <li clssName="about-list-item">Free VPK offered</li>
                            
                            <li clssName="about-list-item">VPK wrap-around care offered</li>
                            
                            <li clssName="about-list-item">Full time care available for ages 2-5</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;