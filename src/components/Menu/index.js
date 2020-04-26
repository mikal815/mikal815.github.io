import React from 'react';
import { slide as Menu } from "react-burger-menu";
import '../Menu/Menu.css';

export default () => {
  return (
    <Menu right>
      <a className="menu-item" href="/">
        Home
            </a>

      <a className="menu-item" href="/details">
        Portfolio
            </a>

      <a className="menu-item" href="/services">
        Services
            </a>

      <a className="menu-item" href="/about">
        About Me
            </a>

      <a className="menu-item" href="/hire">
        Hire Me
            </a>
    </Menu>
  );
}