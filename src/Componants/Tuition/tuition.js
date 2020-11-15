import React from 'react';
import './tuition.styles.css';
import {tuition} from '../../Assets/data';

const { infant, registration, one, two, three, four, vpk } = tuition


const Tuition = () => (
    <div>
        <div className='tuition-container'>
           <h1 className='tuition'>Tuition</h1>
           <p className='registration'>Registration fees are {registration} per family</p>
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
        <div className='hours'>
            <h2 className='hours-title'>Hours of Operation</h2>
        </div>
        <div className='hours-content'>
            <p>Monday-Friday: 7:30am - 6:00pm</p>
            <p>Students must arrive by 9:00am</p>
        </div>
        
    </div>
)

export default Tuition;