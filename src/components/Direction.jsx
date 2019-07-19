import React from 'react';
import {Link} from 'react-router-dom';
import Clock from './Animation/Clock';


const Direction = () => {
    return (
        <div className="text-center">
                <h4>Pointing in the right direction </h4>
            <div className="finding-satellites">
                <p style={{marginTop:'20px', marginBottom:'20px', fontSize:'1.5rem'}}>Stand with your phone in your hand, arm extended, screen facing up, and rotate on your feet until the two clock hands on the next screen are at midnight.</p>
                <Clock />
                <div className="btn-placement">
                    <Link to="/direction" className="btn-style" >Next</Link>
                </div>
            </div>
        </div>
    )
}

export default Direction
