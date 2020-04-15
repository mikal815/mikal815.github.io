import React from 'react';
import BPS from '../../assets/images/BPS.PNG';
import Icarus from '../../assets/images/Icarus.PNG';
import MTME from '../../assets/images/mtme.PNG';
import Shapes from '../../assets/images/Shapes.PNG';
import SurfersDepot from '../../assets/images/surfersdepot.PNG';
import '../Gallery/Gallery.css';

export default function Gallery() {
    return (
        <div class="container">
            <div id="carousel">
                <figure><img src={BPS} alt="" /></figure>
                <figure><img src={Icarus} alt="" /></figure>
                <figure><img src={MTME} alt="" /></figure>
                <figure><img src={Shapes} alt="" /></figure>
                <figure><img src={SurfersDepot} alt="" /></figure>
            </div>
        </div>
    )
}
