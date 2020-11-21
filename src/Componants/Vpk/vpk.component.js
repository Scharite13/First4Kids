import React from 'react';
import './vpk.styles.css';
import { vpk } from '../../Assets/data';


const { explanation, how, details } = vpk

const VpkComponent = () => (
    <div className='vpk-container'>
        <h1 className="vpk-title">Voluntary Pre Kindergarten</h1>
        <div className="what-is-vpk">
            <h2 className="vpk-title">What is VPK?</h2>
            <p className="explanation"> {explanation}</p>
        </div>
        <div className="how-it-works">
            <h2 className="vpk-title">How does VPK work?</h2>
            <p className="how">{how}</p>
        </div>
        <div className="details">
            <h2 className="vpk-title">Quick Facts</h2>
            <ul>
               <li>{details.duration}</li>
               <li>{details.who}</li>
               <li>{details.cost}</li>
               <li>{details.extended}</li>

            </ul>
            <div className="elc-cert">
                <p>For more information on VPK and how to register your child please click <a href="http://elc-manatee.org/Voluntary-Prekindergarten-VPK" className="elc-site" target="blank">here.</a></p>
            </div>

        </div>
    </div>
)

export default VpkComponent;
