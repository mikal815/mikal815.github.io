import React from 'react';
import BPS from '../../assets/images/BPS-small.PNG';
import Icarus from '../../assets/images/Icarus-small.PNG';
import MTME from '../../assets/images/mtme-small.PNG';
import Shapes from '../../assets/images/Shapes-small.PNG';
import SurferDepot from '../../assets/images/surfer-depot-sm.png';
import OCHS from '../../assets/images/OCHS-small.png';
import '../Gallery/Gallery.css';
import { Link } from 'react-router-dom';

export default function Gallery() {

    return (
        <div className="container">
            <div id="carousel">
                <figure><a href="https://surfer-depot.herokuapp.com/"><img src={SurferDepot} alt="Surfer Depot" /></a></figure>
                <figure><a href="http://the-event2021.surge.sh/" ><img src={BPS} alt="Boardwalk Pier Stage" /></a></figure>
                <figure><a href="http://oceancity-baseball.surge.sh/"><img src={OCHS} alt="OCHS" /></a></figure>
                <figure><a href="http://superb-science.surge.sh/"><img src={Icarus} alt="Icarus" /></a></figure>
                <figure><a href="https://music-to-my-ears-1.herokuapp.com/"><img src={MTME} alt="Music to My Ears" /></a></figure>
                <figure><a href="http://fluffy-zoo.surge.sh/"><img src={Shapes} alt="Shape Shifter" /></a></figure>
            </div>
        </div>
    )
}
