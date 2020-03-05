import React from 'react';
import styled from 'styled-components';
import darkdunes from '../src/assets/images/dark_dunes.jpg';
import '../src/App.css';
import Logo from '../src/components/Logo';
import Slogan from '../src/components/Slogan';
import Sidebar from '../src/components/BurgerMenu/BurgerMenu';

const AppLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 5rem;
  grid-template-areas: 
    "header header"
    "main";
  /* width: 100%; */
  /* justify-items: center; */
  height: 100vh;
  /* background-image: url(${darkdunes}); */
  background-color: #27292b;
`

function App() {

  return (

    <AppLayout>
      <Sidebar />
      <div id="page-wrap">
        <Logo />
        <Slogan />
      </div>
    </AppLayout>

  );
}

export default App;
