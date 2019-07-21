import React from 'react'
import {Link} from 'react-router-dom'
import Satellite from '../svg/Satellite';
import earth from '../../assets/earth.svg';

const FoundSatellite = () => {
    return (
        <div className="flex-style-box">
        <div>
            <h4>Finding your Satellite</h4>
            <p style={{marginTop:'20px', marginBottom:'20px', fontSize:'1.5rem'}}>We found the best satellite for you at your current location. Say 'hello' to your new best friend. SATTEFI-US-117</p>
        </div>
        <div className="earth-sat">
            <div className="sat">
                <Satellite opacity="0" rotate="-180.0000" />
                <Satellite opacity="1" rotate="90.0000" />
            </div>
                <img src={earth} alt=""/>
            {/* <div className="sat">
                <Satellite opacity="0" rotate="-90.0000" />
                <Satellite opacity="0" rotate="0" />
            </div> */}
            <div className="btn-placement">
                    <Link to="/intro" className="btn-style">Next</Link>
            </div>
        </div>
    </div>
    )
}





export default FoundSatellite
