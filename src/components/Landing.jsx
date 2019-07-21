import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

const Landing = () => {
    return (
            <div className="flex-style-box">
                <div>
                    <h4>Satte Fi<span><sup>TM</sup></span></h4>
                    <p>You're just moments away from crystal-clear phone calls and all-you-can-type messaging! Let's get your antenna set up</p>
                </div>
                <div className="btn-placement">
                    <Link to="/find" className="btn-style" >Next</Link>
                </div>
            </div>
    )
}

export default Landing
