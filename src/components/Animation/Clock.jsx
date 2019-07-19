import React from 'react';
import OuterRing from '../svg/OuterRing';
import InnerRing from '../svg/InnerRing';
import LongHand from '../svg/LongHand';
import ShortHand from '../svg/ShortHand';

const Clock = () => {
    return (
        <div className="clock-container">
            <div id="base"> 
                <OuterRing /> 
            <span style={{zIndex:'1'}} > <LongHand />  </span>
             </div>


        </div>

    )
}

export default Clock
