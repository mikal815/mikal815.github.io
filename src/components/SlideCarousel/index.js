import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import SurfersDepot from '../../assets/images/surfersdepot.PNG';
import ShapeShifter from '../../assets/images/Shapes.PNG';
import MTME from '../../assets/images/mtme.PNG';
import BPS from '../../assets/images/BPS.PNG';
import Icarus from '../../assets/images/Icarus.PNG';

class SlideCarousel extends Component {

    render() {
        return (
            <div>

                <Carousel
                    width={'21.3rem'}
                    showThumbs={false}
                    autoPlay={true}
                    infiniteLoop={true}
                >
                    <div>
                        <img alt="Surfer's Depot" src={SurfersDepot} />
                    </div>
                    <div>
                        <img alt="Shape Shifter" src={ShapeShifter} />
                    </div>
                    <div>
                        <img alt="Music to My Ears" src={MTME} />
                    </div>
                    <div>
                        <img alt="Boardwalk Pier Stage" src={BPS} />
                    </div>
                    <div>
                        <img alt="Icarus" src={Icarus} />
                    </div>
                </Carousel >
            </div>
        );
    }
};

export default SlideCarousel

