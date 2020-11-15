import React from 'react';
import './enrollment.styles.css';
import Tuition from '../../Componants/Tuition/tuition';
import Footer from '../../Componants/Footer/Footer';

const EnrollmentPage = () => (
    <div className='enrollment-page'>
       <Tuition/>
       <Footer/>
    </div>
)

export default EnrollmentPage;