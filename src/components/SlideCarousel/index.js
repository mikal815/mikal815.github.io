import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default class SlideCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img alt="Surfer's Depot" src="../../assets/images/surfersdepot.PNG" />
                    <p className="legend">Surfer's Depot</p>
                </div>
                <div>
                    <img alt="Icarus" src="../../assets/images/Icarus.PNG" />
                    <p className="legend">Icarus</p>
                </div>
                <div>
                    <img alt="Shape Shifter" src="../../assets/images/Shapes.PNG" />
                    <p className="legend">Shape Shifter</p>
                </div>
                <div>
                    <img alt="Boardwalk Pier Stage" src="../../assets/images/BPS.PNG" />
                    <p className="legend">Boardwalk Pier Stage</p>
                </div>
                <div>
                    <img alt="Music to My Ears" src="../../assets/images/mtme.PNG" />
                    <p className="legend">Music to My Ears</p>
                </div>
            </Carousel>
        );
    }
};