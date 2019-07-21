import React from 'react';
import {Link} from 'react-router-dom';
import Clock from './Animation/Clock';


const Direction = () => {
    return (
        <div className="text-center">
                <h4>Pointing in the right direction </h4>
            <div className="finding-satellites">
                <p style={{margin: '40px', fontSize:'1.5rem'}}>The <strong>minute hand</strong> is where you're pointing</p>
                <Clock />
                <p style={{margin: '40px', fontSize:'1.5rem'}}>The <strong>hour hand</strong> is SATTEFI-US-117</p>
                
                <div className="btn-placement">
                    <Link to="/direction" className="btn-style" >Next</Link>
                </div>
            </div>
        </div>
    )
}

export default Direction
