import React from 'react'
import {Link} from 'react-router-dom'
import compass from '../assets/compass.png';

const Intro = () => {
    return (
        <div className="flex-style-box">
            <div>
                <h4>Pointing in the right direction</h4>
                <p>Stand with your phone in your hand, arm extended, screenfacing up, and rotate on your feet until the two clock hands on the next screen are at midnight.</p>
            </div>
            <img src={compass} className="compass-img" alt=""/>
            <div className="btn-placement">
                <Link to="/direction" className="btn-style" >Next</Link>
            </div>
        </div>
    )
}

export default Intro
