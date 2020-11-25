import React from 'react';
import Footer from '../../Componants/Footer/Footer';
import './faq.styles.css';
import FaqComponent from '../../Componants/FAQ/faq-component';


const FaQ = () => (
    <div className="faq-page">
        <FaqComponent/>
        <Footer/>
    </div>
)

export default FaQ;