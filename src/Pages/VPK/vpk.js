import React from 'react';
import Footer from '../../Componants/Footer/Footer';
import VpkComponent from '../../Componants/Vpk/vpk.component'
import './vpk.styles.css';


const VpK = () => (
    <div className="vpk-page">
        <VpkComponent/>
        <Footer/>
    </div>
)

export default VpK;