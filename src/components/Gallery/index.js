import React from 'react';
import BPS from '../../assets/images/BPS.PNG';
import Icarus from '../../assets/images/Icarus.PNG';
import MTME from '../../assets/images/mtme.PNG';
import Shapes from '../../assets/images/Shapes.PNG';
import SurfersDepot from '../../assets/images/surfersdepot.PNG';
import '../Gallery/Gallery.css';

export default function Gallery() {

    function handleClick(e) {
        e.preventDefault();
        console.log('The link was clicked.');
    }

    return (
        <div className="container">
            <div id="carousel">
                <figure onClick={handleClick}><img src={BPS} alt="Boardwalk Pier Stage" /></figure>
                <figure onClick={handleClick}><img src={Icarus} alt="Icarus" /></figure>
                <figure onClick={handleClick}><img src={MTME} alt="Music to My Ears" /></figure>
                <figure onClick={handleClick}><img src={Shapes} alt="Shape Shifter" /></figure>
                <figure onClick={handleClick}><img src={SurfersDepot} alt="Surfer's Depot" /></figure>
            </div>
        </div>
    )
}
