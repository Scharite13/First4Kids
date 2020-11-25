import React from 'react';
import './faq-styles.css';
import { faq } from '../../Assets/data';



const FaqComponent = () => (
    <div className="faq">
        <h1 className="faq-title">FAQ's</h1>
        {faq.map((index)=>
        <div className="faq-container">
            <h2 className="question">{index.question}</h2>
            <p className="answer">{index.answer}</p>
        </div>)}
    </div>
)

export default FaqComponent;