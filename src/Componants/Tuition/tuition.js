import React from 'react';
import './tuition.styles.css';
import {tuition} from '../../Assets/data';
import Registration from '../../Assets/Registration.pdf';

const { infant, registration, one, two, three, four, vpk } = tuition


const Tuition = () => (
    <div className="container">
        <div className='left'>
            <div className='tuition-container'>
               <h1 className='tuition'>Weekly Tuition and Fees</h1>
               <p className='registration'>Registration fees are {registration} per family</p>
               <p className='registration'>(non-required for 9-12 VPK students)</p>
               <ul className='tuition-group'>
                   <p className='ages'>Infants</p>
                   <li className='days'>Full Day: {infant}</li>
               </ul>
               <ul className='tuition-group'>
                   <p className='ages'>One Year Old's</p>
                   <li className='days'>Full Day: {one.full}</li>
                   <li className='days'>Three Day: {one.threeDay}</li>
               </ul>
               <ul className='tuition-group'>
                   <p className='ages'>Two Year Old's</p>
                   <li className='days'>Full Day: {two.full}</li>
                   <li className='days'>Three Day: {two.threeDay}</li>
                   <li className='days'>Five Mornings: {two.fiveMorning}</li>
               </ul>
               <ul className='tuition-group'>
                   <p className='ages'>Three Year Old's</p>
                   <li className='days'>Full Day: {three.full}</li>
                   <li className='days'>Three Day: {three.threeDay}</li>
                   <li className='days'>Five Mornings: {three.fiveMorning}</li>
               </ul>
               <ul className='tuition-group'>
                   <p className='ages'>Four Year Old's</p>
                   <li className='days'>Full Day: {four.full}</li>
                   <li className='days'>Three Day: {four.threeDay}</li>
                   <li className='days'>Five Mornings: {four.fiveMorning}</li>
               </ul>
               <ul className='tuition-group'>
                   <p className='ages'>VPK</p>
                   <li className='days'>Full Day: {vpk.full}</li>
                   <li className='days'>Five Mornings: {vpk.fiveMorning}</li>
               </ul>
            </div>
        </div>

        <div className='right'>
            <div className="enrollment-container">
                <h1 className="registration-title">Registration Process</h1>
                <p className="registration-intro"> Please call the Director to inquire about available enrollment.  Some
                    classes fill up faster than others.  Names can always be placed on a waiting list for future openings.  
                </p>
                <ul className="enrollment-check-list">
                    <p>If there is a spot open and after touring the facility you feel as though this is the best school for 
                        your child:  
                    </p>
                    <li className="check-list">You pay the $80 registration fee to hold the spot.</li>
                    <li className="check-list">Return the registration paper work.</li>
                    <li className="check-list">Provide us with the start date.</li>

                </ul>
                
                <p className="paperwork"> Enrollment paperwork must be completed in full by the morning your child starts class.  Immunization
                 records and Student Health forms must be received by the school within 30 days of entry.
                </p>
                <p className="subsidies"> Subsidies are accepted from the Early Learning Coalition.</p>

            </div>
            <div className='hours'>
                <h2 className='hours-title'>Hours of Operation</h2>
            </div>
            <div className='hours-content'>
                <p>Monday-Friday: 7:30am - 6:00pm</p>
                <p>Students must arrive by 9:00am</p>
            </div>
            <h3 className="registration-paper-work"><a className="registration-link" href={Registration} target='_blank'>Registration Paper Work</a></h3>
            
        </div>
        
    </div>
)

export default Tuition;