import React, {useState} from 'react';
import earth from '../../assets/earth.svg';
// import satellite from '../../assets/satellite.svg';
import Spinner from '../../assets/Spinner.gif';
import Satellite from '../svg/Satellite';


const FindingSatellites = () => {
    const [opacity, setOpacity] = useState(0.5)
    setInterval(()=>{
        if (opacity === 0.5){
            setOpacity(1)
        }else{
            setOpacity(0.5)
        }
    }, 500)

    return (
        <div className="finding-satellites">
              <p style={{marginTop:'20px', marginBottom:'20px', fontSize:'1.5rem'}}>We have lots of satellites. We're looking for a good match...</p>
            <div className="spinner-class">
                <img src={Spinner} alt="" width="75px"/>
            </div>
            <div className="sat">
                <Satellite opacity={opacity} rotate="-180.0000" />
                <Satellite opacity={opacity} rotate="90.0000" />
            </div>
                <img src={earth} alt=""/>
            <div className="sat">
                <Satellite opacity={opacity} rotate="-90.0000" />
                <Satellite opacity={opacity} rotate="0" />
            </div>
        </div>
    )

}

export default FindingSatellites
