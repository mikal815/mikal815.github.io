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
                <figure><a href="https://ochs-baseball.surge.sh/" target="_blank" rel="noopener noreferrer"><img src={OCHS} alt="OCHS" /></a></figure>
                <figure><a href="https://superb-science.surge.sh/" target="_blank" rel="noopener noreferrer"><img src={Icarus} alt="Icarus" /></a></figure>
                <figure><a href="https://surfer-depot.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img src={SurferDepot} alt="Surfer Depot" /></a></figure>
                <figure><a href="https://fluffy-zoo.surge.sh/" target="_blank" rel="noopener noreferrer"><img src={Shapes} alt="Shape Shifter" /></a></figure>
                <figure><a href="https://music-to-my-ears-1.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img src={MTME} alt="Music to My Ears" /></a></figure>
                <figure><a href="https://bps-site.surge.sh/" target="_blank" rel="noopener noreferrer"><img src={BPS} alt="Boardwalk Pier Stage" /></a></figure>
            </div>
        </div>
    )
}
