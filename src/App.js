import React from 'react';
import styled from 'styled-components';
import '../src/App.css';
import Logo from '../src/components/Logo';
import Slogan from '../src/components/Slogan';
import Sidebar from './components/Menu';

const AppLayout = styled.div`
  display: grid;
  grid-template-columns: 25% 50% 25%;
  grid-template-rows: 5rem;
  height: 100vh;
  background-color: #27292b;
`

function App() {

  return (

    <div>
      <AppLayout>
        <Logo />
        <div></div>
        <Sidebar />
        <Slogan />
      </AppLayout>
    </div>
  );
}

export default App;
