import React, {Fragment, useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import FindingSatellites from './Animation/FindingSatellites';

const Find = () => {

    const [animComplete, setAnimComplete] = useState(false);

    useEffect(()=>{
        setTimeout(()=>{
            setAnimComplete(true);
        }, 4000)

    },[])



    return (
        <Fragment>
            <div className="text-center">
                <h4>Finding your Satellite</h4>
                <p style={{marginTop:'20px', marginBottom:'20px'}}>We have lots of satellites. We're looking for a good match...</p>
            </div>
            <FindingSatellites />
            {/* {animComplete ? <h4>Yes, animation finished</h4>:<FindingSatellites />} */}
            <div className="btn-placement">
                <Link to="/find" className="btn-style" >Next</Link>
            </div>
        </Fragment> 
    )
}

export default Find
