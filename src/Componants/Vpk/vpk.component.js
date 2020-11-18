import React from 'react';
import './vpk.styles.css';
import { vpk } from '../../Assets/data';


const { explanation, how, details } = vpk

const VpkComponent = () => (
    <div className= 'vpk-container'>
        <h1>Voluntary Pre Kindergarten</h1>
        <div className="what-is-vpk">
            <h2>What is VPK?</h2>
            <p className="explanation"> {explanation}</p>
        </div>
        <div className="how-it-works">
            <h2>How does VPK work?</h2>
            <p className="how">{how}</p>
        </div>
    </div>
)

export default VpkComponent;
