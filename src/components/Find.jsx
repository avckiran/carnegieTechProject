import React, {Fragment, useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import FindingSatellites from './Animation/FindingSatellites';
import FoundSatellite from './Animation/FoundSatellite';

const Find = () => {

    const [animComplete, setAnimComplete] = useState(false);

    useEffect(()=>{
        setTimeout(()=>{
            setAnimComplete(true);
        }, 3000)

    },[])



    return (
            <div className="flex-style-box">
                {/* <FindingSatellites /> */}
                {animComplete ? <FoundSatellite />:<FindingSatellites />}
            </div>
            // <div className="flex-style-box">
            //     {/* <h4>Finding your Satellite</h4> */}
            //     {/* <p style={{marginTop:'20px', marginBottom:'20px'}}>We have lots of satellites. We're looking for a good match...</p> */}
            //     {/* <FindingSatellites /> */}
                
            // </div>
    )
}

export default Find
