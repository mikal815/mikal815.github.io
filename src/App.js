import React from 'react';
import styled from 'styled-components';
import '../src/App.css';
import Logo from '../src/components/Logo';
import Sidebar from './components/Menu';
import SimpleCard from './components/SimpleCard';
import MediaQuery from 'react-responsive';
import SlideCarousel from './components/SlideCarousel';

const AppLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 5rem;
  height: 100vh;
  background-color: #27292b;
  /* justify-content: center; */
`

function App() {

  return (
    <div>
      <AppLayout>
        <Logo />
        <Sidebar />

        <div className="span-row-2">
          <MediaQuery maxDeviceWidth={500}>
            <SimpleCard />
          </MediaQuery>
        </div>

        <button className="work-tag span-row-2">
          <div>View Work</div>
        </button>

        <div className="span-row-2">
          <SlideCarousel />
        </div>

      </AppLayout>
    </div >
  )
}

export default App;