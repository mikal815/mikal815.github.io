import React from 'react';
import styled from 'styled-components';
import '../src/App.css';
import Logo from '../src/components/Logo';
import Sidebar from './components/Menu';
import SimpleCard from './components/SimpleCard';

const AppLayout = styled.div`
  display: grid;
  grid-template-columns: 30% 1fr 20%;
  grid-template-rows: 5rem;
  height: 100vh;
  background-color: #27292b;
  justify-content: center;
`

function App() {

  return (

    <div>
      <AppLayout>
        <Logo />
        <div></div>
        <Sidebar />
        <SimpleCard />
      </AppLayout>
    </div>
  );
}

export default App;
