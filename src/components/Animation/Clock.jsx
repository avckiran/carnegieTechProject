import React from 'react';
import OuterRing from '../svg/OuterRing';
import InnerRing from '../svg/InnerRing';
import LongHand from '../svg/LongHand';
import ShortHand from '../svg/ShortHand';
import outerRing from '../../assets/outer_ring.svg';
import innerRing from '../../assets/inner_ring.svg';

const Clock = () => {



    return (
        // <div style={{position:'relative', left:'0', top:'0'}}>
            <div className='clock-container'>
            <LongHand className='long-hand' />
            <ShortHand className='short-hand'/>
            <InnerRing className='inner-ring' />
            <OuterRing className='clockBase' />
            </div>
        

        // </div>

    )
}

export default Clock
