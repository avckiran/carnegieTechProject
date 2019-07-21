import React from 'react';
import {Link} from 'react-router-dom';
import Clock from './Animation/Clock';


const Direction = () => {
    return (
        <div className="flex-style-box">
                <h4 style={{margin:'2% auto'}}>Pointing in the right direction </h4>
                <p style={{margin:'3%'}}>The <strong>minute hand</strong> is where you're pointing</p>
                <Clock />
                <p style={{margin:'3%'}}>The <strong style={{color:'#9013fe'}}>hour hand</strong> is<br/> SATTEFI-US-117</p>
            {/* <div className="finding-satellites"> */}
                
                <div className="btn-placement" style={{marginTop:'5%', opacity:'0.2'}}>
                    <Link to="/direction" className="btn-style">Next</Link>
                </div>
            {/* </div> */}
        </div>
    )
}

export default Direction
