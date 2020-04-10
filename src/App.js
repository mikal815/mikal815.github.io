import React from 'react';
import styled from 'styled-components';
import '../src/App.css';
import Logo from '../src/components/Logo';
import Sidebar from './components/Menu';
import Card from '../src/components/Card';
import MediaQuery from 'react-responsive';
import SlideCarousel from './components/SlideCarousel';
import CardFlip from './components/CardFlip';


const AppLayout = styled.div`
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

function App() {

  return (
    <AppLayout>
      <Logo />
      <Sidebar />

      <div className="span-row-2">
        <MediaQuery maxDeviceWidth={500}>
          <CardFlip>
            <Card />
          </CardFlip>
        </MediaQuery>
      </div>

      <button className="view-work span-row-2">
        <div>View Work</div>
      </button>

      <div className="span-row-2">
        <SlideCarousel />
      </div>

      <footer className="footer span-row-2">
        <div>portfolio</div>
        <div>skills</div>
        <div>hire me</div>
      </footer>

    </AppLayout>
  )
}

export default App;