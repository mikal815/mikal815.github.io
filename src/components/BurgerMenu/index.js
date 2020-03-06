import React from 'react';
import styled from 'styled-components';

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #696969;
  transform: ${({ open }) => open ? 'translateX(40%)' : 'translateX(100%)'};
  height: 100vh;
  text-align: left;
  /* padding: 2rem; */
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.9s ease;
  @media (max-width: 576px) {
      width: 100%;
    }
  a {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    /* letter-spacing: 0.5rem; */
    color: #27292b;
    text-decoration: none;
    transition: color 0.3s linear;
    @media (max-width: 576px) {
      font-size: 1.5rem;
      /* text-align: center; */
    }
    &:hover {
      color: #fff;
    }
  }
`

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <a href="/">
        Home
      </a>
      <a href="/">
        Portfolio
      </a>
      <a href="/">
        Services
      </a>
      <a href="/">
        About
        </a>
      <a href="/">
        Hire Me
      </a>
    </StyledMenu >
  )
}

const StyledBurger = styled.button`
  position: absolute;
  top: 5%;
  /* left: 2rem; */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  /* margin-top: 10px; */
  z-index: 10;
  &:focus {
    outline: none;
  }
  div {
    width: 2rem;
    height: 0.2rem;
    background: ${({ open }) => open ? '#27292b' : '#FFF'};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    margin-left: 8.2rem;
    top: 1rem;
    transform-origin: 1px;
    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(40px)' : 'translateX(0)'};
    }
    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`
const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}

export default function BurgerMenu() {

  const [open, setOpen] = React.useState(false);

  return (

    <div className="burger-menu-container">
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} />
    </div>
  );
}