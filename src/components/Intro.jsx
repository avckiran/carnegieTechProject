import React from 'react'
import {Link} from 'react-router-dom'
import compass from '../assets/compass.png';

const Intro = () => {
    return (
        <div className="text-center">
            <div className="finding-satellites">
                <h4>Pointing in the right direction </h4>
                <p style={{margin: '40px', fontSize:'1.5rem'}}>Stand with your phone in your hand, arm extended, screenfacing up, and rotate on your feet until the two clock hands on the next screen are at midnight.</p>
                <img src={compass} alt=""/>
                <div className="btn-placement">
                    <Link to="/direction" className="btn-style" >Next</Link>
                </div>
            </div>
        </div>
    )
}

export default Intro
