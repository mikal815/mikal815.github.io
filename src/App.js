import React from 'react';
import styled from 'styled-components';
import '../src/App.css';
import Logo from '../src/components/Logo';
import Slogan from '../src/components/Slogan';
import BurgerMenu from './components/BurgerMenu';

const AppLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 5rem;
  grid-template-areas: 
    "header header"
    "main";
  height: 100vh;
  background-color: #27292b;
`

function App(props) {

  return (

    <AppLayout>
      <Logo />
      <BurgerMenu />
      <Slogan />
    </AppLayout>

  );
}

export default App;
