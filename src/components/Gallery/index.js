import React from 'react';
import BPS from '../../assets/images/BPS.PNG';
import Icarus from '../../assets/images/Icarus.PNG';
import MTME from '../../assets/images/mtme.PNG';
import Shapes from '../../assets/images/Shapes.PNG';
import SurfersDepot from '../../assets/images/surfersdepot.PNG';
import '../Gallery/Gallery.css';

export default function Gallery() {

    return (
        <div className="container">
            <div id="carousel">
                <figure><a href="http://dreary-head.surge.sh/"><img src={BPS} alt="Boardwalk Pier Stage" /></a></figure>
                <figure><a href="http://superb-science.surge.sh/"><img src={Icarus} alt="Icarus" /></a></figure>
                <figure><a href="https://sleepy-savannah-81002.herokuapp.com/"><img src={MTME} alt="Music to My Ears" /></a></figure>
                <figure><a href="http://fluffy-zoo.surge.sh/"><img src={Shapes} alt="Shape Shifter" /></a></figure>
                <figure><a href="https://vast-mesa-70867.herokuapp.com/"><img src={SurfersDepot} alt="Surfer's Depot" /></a></figure>
            </div>
        </div>
    )
}
