import React from 'react';
import earth from '../../assets/earth.svg';
import satellite from '../../assets/satellite.svg';


const FindingSatellites = () => {
    return (
        <div className="finding-satellites">
            <div className="sat">
                <img src={satellite}  alt=""/>
                <img src={satellite} style={{transform: 'rotate(90deg)'}}alt=""/>
            </div>
                <img src={earth} alt=""/>
            <div className="sat">
                <img src={satellite} style={{transform: 'rotate(-90deg)'}} alt=""/>
                <img src={satellite} style={{transform: 'rotate(180deg)'}} alt=""/>
            </div>
        </div>
    )
}

export default FindingSatellites
