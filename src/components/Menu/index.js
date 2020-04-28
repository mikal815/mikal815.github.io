import React from 'react';
import { slide as Menu } from "react-burger-menu";
import '../Menu/Menu.css';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <Menu right>
      <Link className="menu-item" to="/">
        Home
      </Link>

      <Link className="menu-item" to="/details">
        Portfolio
      </Link>

      <Link className="menu-item" to="/services">
        Services
      </Link>

      <Link className="menu-item" to="/about">
        About Me
      </Link>

      <Link className="menu-item" to="/hire">
        Hire Me
      </Link>
    </Menu>
  );
}