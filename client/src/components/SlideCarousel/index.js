import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import SurferDepot from '../../assets/images/surfer-depot.PNG';
import ShapeShifter from '../../assets/images/Shapes.PNG';
import MTME from '../../assets/images/mtme.PNG';
import BPS from '../../assets/images/BPS.PNG';
import Icarus from '../../assets/images/Icarus.PNG';
import OCHS from '../../assets/images/OCHS.PNG';

class SlideCarousel extends Component {

    render() {
        return (
            <div>

                <Carousel
                    width={'90vw'}
                    minHeight={'5.5rem'}
                    maxHeight={'8.5rem'}
                    marginRight={'5vw'}
                    marginLeft={'5vw'}
                    showThumbs={false}
                    autoPlay={true}
                    infiniteLoop={true}
                    showStatus={false}
                    showIndicators={false}
                >
                    <a href="https://surfer-depot.herokuapp.com/">
                        <div>
                            <img alt="Surfer Depot" src={SurferDepot} />
                        </div>
                    </a>
                    <a href="http://oceancity-baseball.surge.sh/">
                        <div>
                            <img alt="OCHS Baseball" src={OCHS} />
                        </div>
                    </a>
                    <a href="http://fluffy-zoo.surge.sh/">
                        <div>
                            <img alt="Shape Shifter" src={ShapeShifter} />
                        </div>
                    </a>
                    <a href="https://sleepy-savannah-81002.herokuapp.com/">
                        <div>
                            <img alt="Music to My Ears" src={MTME} />
                        </div>
                    </a>
                    <a href="http://dreary-head.surge.sh/">
                        <div>
                            <img alt="Boardwalk Pier Stage" src={BPS} />
                        </div>
                    </a>
                    <a href="http://superb-science.surge.sh/">
                        <div>
                            <img alt="Icarus" src={Icarus} />
                        </div>
                    </a>
                </Carousel >
            </div>
        );
    }
};

export default SlideCarousel

