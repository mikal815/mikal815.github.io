import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { makeStyles } from '@material-ui/core/styles';
import SurfersDepot from '../../assets/images/surfersdepot.PNG';
import ShapeShifter from '../../assets/images/Shapes.PNG';
import MTME from '../../assets/images/mtme.PNG';
import BPS from '../../assets/images/BPS.PNG';
import Icarus from '../../assets/images/Icarus.PNG';

const useStyles = makeStyles({
    root: {
        minWidth: 260,
        maxWidth: 260,
        height: 260,
        backgroundColor: 'rgb(34, 125, 91)',
        color: '#ffffff'
    }
});



class SlideCarousel extends Component {


    render() {
        return (
            <Carousel
                maxWidth={'260px'}
                minWidth={'260px'}
            >
                <div>
                    <img alt="Surfer's Depot" src={SurfersDepot} />
                    <p className="legend">Surfer's Depot</p>
                </div>
                <div>
                    <img alt="Shape Shifter" src={ShapeShifter} />
                    <p className="legend">Shape Shifter</p>
                </div>
                <div>
                    <img alt="Music to My Ears" src={MTME} />
                    <p className="legend">Music to My Ears</p>
                </div>
                <div>
                    <img alt="Boardwalk Pier Stage" src={BPS} />
                    <p className="legend">Boardwalk Pier Stage</p>
                </div>
                <div>
                    <img alt="Icarus" src={Icarus} />
                    <p className="legend">Icarus</p>
                </div>

            </Carousel >
        );
    }
};

export default SlideCarousel

