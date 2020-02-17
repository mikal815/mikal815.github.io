import React from 'react';
import styled from 'styled-components';
import cyberstreet from '../src/assets/images/cyberstreet.jpg'
import '../src/App.css'
import MenuIcon from '../src/components/MenuIcon'
import Logo from '../src/components/Logo'

const AppLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  height: 100vh;
  background-image: url(${cyberstreet});
`

function App() {

  return (

    <AppLayout>
      <Logo />
      <MenuIcon />
    </AppLayout>

  );
}

export default App;
