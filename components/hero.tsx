import React from 'react';
import Brands from "../components/Brands";
import Overview from "../components/Overview";
import TherapeuticAreas from "../components/TherapeuticAreas ";


const Hero = () =>{
    return(
        <div>
            <TherapeuticAreas/>
            <Brands />
          <Overview />
        </div>

    )
}
export default Hero;