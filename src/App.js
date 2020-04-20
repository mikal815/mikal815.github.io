import React from 'react';
import styled from 'styled-components';
import '../src/App.css';
import Logo from '../src/components/Logo';
import Sidebar from './components/Menu';
import MediaQuery from 'react-responsive';
import SlideCarousel from './components/SlideCarousel';
import CardFlip from './components/CardFlip';
import Gallery from './components/Gallery';
import frontend from './assets/icons/frontend.svg';
import backend from './assets/icons/backend.svg';
import database from './assets/icons/database.svg';
import additional from './assets/icons/additional.svg';

const MobileLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  /* grid-template-rows: 8vh auto; */
  grid-auto-rows: 1fr;
  height: 100%;
  background-color: #27292b;
  position: fixed;
  right: 0;
  left: 0;
`

const TabletLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  height: 100%;
  background-color: #27292b;
  position: fixed;
  right: 0;
  left: 0;
`

function App() {

  return (
    <>
      <MediaQuery maxDeviceWidth={500}>
        <MobileLayout>
          <Logo />
          <Sidebar />

          <div className="span-row-2">
            <CardFlip />
          </div>

          <button className="view-work span-row-2">
            <div>View Work</div>
          </button>

          <div className="span-row-2">
            <SlideCarousel />
          </div>

          <footer className="footer span-row-2">
            <div>portfolio</div>
            <div>services</div>
            <div>hire me</div>
          </footer>

        </MobileLayout>
      </MediaQuery>

      <MediaQuery minDeviceWidth={500}>
        <TabletLayout>
          <Logo />
          <Sidebar />

          <div className="slogan-container span-row-2">
            <div className="slogan-text">
              I actualize intuative and <br></br>engaging experiences ~
            </div>
          </div>

          <div className="skills-container span-row-2">
            <div className="skills-card">
              <img src={frontend} alt="frontend icon" />
              <div className="heading">FRONT END</div>
              <div>HTML5</div>
              <div>CSS3 | SASS</div>
              <div>Javascript</div>
              <div>React | Redux</div>
              <div>-</div>
              <div>-</div>
            </div>
            <div className="skills-card">
              <img src={backend} alt="frontend icon" />
              <div className="heading">SERVER</div>
              <div>NodeJS</div>
              <div>Express</div>
              <div>REST API</div>
              <div>Authentication/<br></br>Authorization</div>
              <div>Payment systems</div>
            </div>
            <div className="skills-card">
              <img src={database} alt="frontend icon" />
              <div className="heading">DATABASE</div>
              <div>mySQL</div>
              <div>MongoDB</div>
              <div>Password</div>
              <div>Hashing</div>
              <div>-</div>
              <div>-</div>
            </div>
            <div className="skills-card">
              <img src={additional} alt="additional icon" />
              <div className="heading">ADDITIONAL</div>
              <div>Unit Testing</div>
              <div>End to End testing</div>
              <div>Continuous</div>
              <div>Integration</div>
              <div>-</div>
              <div>-</div>
            </div>
          </div>

          <button className="view-work span-row-2">
            <div>View Work</div>
          </button>

          <div className="span-row-2">
            <Gallery />
          </div>
          <footer className="footer span-row-2">
            <div>portfolio</div>
            <div>services</div>
            <div>hire me</div>
          </footer>
        </TabletLayout>
      </MediaQuery>
    </>
  )
}

export default App;