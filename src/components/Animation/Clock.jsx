import React, {useState} from 'react';
import OuterRing from '../svg/OuterRing';
import InnerRing from '../svg/InnerRing';
import LongHand from '../svg/LongHand';
import ShortHand from '../svg/ShortHand';
import {UseInterval} from '../utils/UseInterval';

const Clock = () => {

    const [rotation, setRotation] = useState(230);
    const [opacity, setOpacity] = useState(0);

    UseInterval(()=>{
        if(rotation != 360){
           setRotation( rotation + 1)
           if(rotation > 300){
               setOpacity(opacity + 0.015)
           }
        }else{
            setOpacity(1);
        }
    },100)

    let handMovement = {
        transform: `rotate(${rotation}deg)`
    }

    let ringStyle = opacity > 0.5 ? {
        fill: "#9013FE",
        opacity: opacity
    } : {
        fill: "#FFF",
        opacity: 1
    }

    const perfect = rotation === 360 ? <div className="text-style text-align-media"><span>Perfect!</span></div> : null;




    return (
            <div className='clock-container'>
            <LongHand className='long-hand' />
            <ShortHand className='short-hand' style={handMovement}/>
            {perfect}
            <InnerRing className='inner-ring' style={ringStyle} />
            <OuterRing className='clockBase' style={ringStyle} /> 
            </div>
    )
}

export default Clock
