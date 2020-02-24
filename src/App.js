import React from 'react';
import styled from 'styled-components';
import darkdunes from '../src/assets/images/dark_dunes.jpg';
import '../src/App.css';
import Logo from '../src/components/Logo';
import BurgerMenu from '../src/components/BurgerMenu';
import Slogan from '../src/components/Slogan';

const AppLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 5rem;
  grid-template-areas: 
    "header header"
    "main";
  width: 100%;
  /* justify-items: center; */
  height: 100vh;
  background-image: url(${darkdunes});
`

function App() {

  return (

    <AppLayout>
      <Logo />
      <BurgerMenu />
      <Slogan />
    </AppLayout>

  );
}

export default App;
