import React from 'react';
import styled from 'styled-components';
import cyberstreet from '../src/assets/images/cyberstreet.jpg';
import '../src/App.css';
import Logo from '../src/components/Logo';
import BurgerMenu from '../src/components/BurgerMenu';

const AppLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  justify-items: center;
  height: 100vh;
  background-image: url(${cyberstreet});
`

function App() {

  return (

    <AppLayout>
      <Logo />
      <BurgerMenu />
    </AppLayout>

  );
}

export default App;
