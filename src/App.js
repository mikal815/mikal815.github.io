import React from 'react';
import styled from 'styled-components';
import '../src/App.css';
import Logo from '../src/components/Logo';
import Sidebar from './components/Menu';
import MediaQuery from 'react-responsive';
import SlideCarousel from './components/SlideCarousel';
import CardFlip from './components/CardFlip';
import Gallery from './components/Gallery';
import SkillsCard from './components/SkillsCard';


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
  /* grid-auto-rows: 1fr; */
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

          <div className="skills-card span-row-2">
            <SkillsCard>
              <div className="heading">FRONT END</div>
              <div>HTML5</div>
              <div>CSS3 | SASS</div>
              <div>Javascript</div>
              <div>React | Redux</div>
            </SkillsCard>
            <SkillsCard>
              <div className="heading">SERVER</div>
              <div>NodeJS</div>
              <div>Express</div>
            </SkillsCard>
            <SkillsCard>
              <div className="heading">DATABASE</div>
              <div>mySQL</div>
              <div>MongoDB</div>
            </SkillsCard>
          </div>


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