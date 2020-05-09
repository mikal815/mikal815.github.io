import React from 'react';
import styled from 'styled-components';
import '../src/Home.css';
import Logo from './components/Logo';
import MenuMobile from './components/MenuMobile';
import Menu from './components/Menu';
import MediaQuery from 'react-responsive';
import SlideCarousel from './components/SlideCarousel';
import CardFlip from './components/CardFlip';
import Gallery from './components/Gallery';
import frontend from './assets/icons/frontend.svg';
import backend from './assets/icons/backend.svg';
import database from './assets/icons/database.svg';
import additional from './assets/icons/additional.svg';
// import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

const MobileLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 1fr;
  height: 100%;
  background-color: #27292b;
  position: fixed;
  padding-left: 5vw;
  padding-right: 5vw;
`

const TabletLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr auto 1fr 12em 1fr;
  height: 100%;
  background-color: #27292b;
  position: fixed;
  padding-left: 5vw;
  padding-right: 5vw;
`

function Home() {

    return (
        <>
            <MediaQuery maxDeviceWidth={500}>
                <MobileLayout>
                    <Logo />
                    <MenuMobile />

                    <div className="span-row-2">
                        <CardFlip />
                    </div>

                    <Link to="/mobile/details" className="view-work-mobile span-row-2">
                        View Work
                    </Link>

                    <div className="span-row-2">
                        <SlideCarousel />
                    </div>

                    <footer className="footer span-row-2">
                        <Link smooth to="/mobile/details/#portfolio">portfolio</Link>
                        <Link smooth to="/mobile/details/#services">services</Link>
                        <Link smooth to="/mobile/details/#hire">hire me</Link>
                    </footer>

                </MobileLayout>
            </MediaQuery>

            <MediaQuery minDeviceWidth={500}>
                <TabletLayout>
                    <Logo />
                    <Menu />

                    <div className="slogan-container span-row-2">
                        <div className="slogan-text">
                            I actualize intuative and<br></br>engaging experiences ~
                        </div>
                    </div>

                    <div className="title span-row-2">
                        Software Developer &nbsp; | &nbsp; Philadelphia, PA
                    </div>

                    <div className="skills-container span-row-2">
                        <div className="skills-card skills-card-frontend">
                            <img src={frontend} alt="frontend icon" />
                            <div className="heading">FRONT END</div>
                            <div>HTML5</div>
                            <div>CSS3 | SASS</div>
                            <div>Javascript</div>
                            <div>React | Redux</div>
                            <div className="hidden-dash">-</div>
                            <div className="hidden-dash">-</div>
                        </div>
                        <div className="skills-card skills-card-server">
                            <img src={backend} alt="server icon" />
                            <div className="heading">SERVER</div>
                            <div>NodeJS</div>
                            <div>Express</div>
                            <div>REST API</div>
                            <div>Authentication/<br></br>Authorization</div>
                            <div>Payment systems</div>
                        </div>
                        <div className="skills-card skills-card-database">
                            <img src={database} alt="database icon" />
                            <div className="heading">DATABASE</div>
                            <div>mySQL</div>
                            <div>MongoDB</div>
                            <div>Password-</div>
                            <div>Hashing</div>
                            <div className="hidden-dash">-</div>
                            <div className="hidden-dash">-</div>
                        </div>
                        <div className="skills-card skills-card-additional">
                            <img src={additional} alt="additional icon" />
                            <div className="heading">ADDITIONAL</div>
                            <div>Unit Testing</div>
                            <div>End to End-</div>
                            <div>testing</div>
                            <div>Continuous-</div>
                            <div>Integration</div>
                            <div className="hidden-dash">-</div>
                        </div>
                    </div>

                    <Link to="/details" className="view-work span-row-2">
                        View Work
                    </Link>

                    <div className="gallery span-row-2">
                        <Gallery />
                    </div>
                    <footer className="footer span-row-2">
                        <Link to="/details">portfolio</Link>
                        <Link to="/services">services</Link>
                        <Link to="/hire">hire me</Link>
                    </footer>
                </TabletLayout>
            </MediaQuery>
        </>
    )
}

export default Home;