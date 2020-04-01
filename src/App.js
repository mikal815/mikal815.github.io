import React from 'react';
import styled from 'styled-components';
import '../src/App.css';
import Logo from '../src/components/Logo';
import Sidebar from './components/Menu';
import SimpleCard from '../src/components/SimpleCard';
import MediaQuery from 'react-responsive';
import SlideCarousel from './components/SlideCarousel';

// let vh = window.innerHeight * 0.01;
// document.documentElement.style.setProperty('--vh', `${vh}px`);

const AppLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  /* grid-template-rows: 2rem 17rem 2rem 17rem 1rem; */
  grid-template-rows: 10% 28% 10% 40% 10%;
  height: 100vh;
  /* height: calc(var(--vh, 1vh) * 100); */
  background-color: #27292b;
`

function App() {

  return (
    <AppLayout>
      <Logo />
      <Sidebar />

      <div className="span-row-2">
        <MediaQuery maxDeviceWidth={500}>
          <SimpleCard />
        </MediaQuery>
      </div>

      <button className="view-work span-row-2">
        <div>View Work</div>
      </button>

      <div className="span-row-2">
        <SlideCarousel />
      </div>

      <div className="footer span-row-2">
        <div>portfolio</div>
        <div>skills</div>
        <div>hire me</div>
      </div>

    </AppLayout>
  )
}

export default App;