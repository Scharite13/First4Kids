import React from 'react';
import './About.styles.css';

function About(){
    return (
        <div className="about-container">
            <div className="about-description-outer">
                <div className="about-description-inner">
                    <p className="about-content">&nbsp;&nbsp;&nbsp;&nbsp;First For Kids is a licensed general member of the United
                        Methodist Association of Preschools, earning the Gold Seal Accreditation.  The school has been serving the downtown
                        Bradenton community since 1989.  Safety is a top priority for us with our coded access door to our facility.
                        We are a nurturing environment where we strive to prepare children to succeed in school and 
                        life.  We are dedicated to the offering learning oportunities for your child to grow intillectually,
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