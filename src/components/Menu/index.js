import React from 'react';
import { slide as Menu } from "react-burger-menu";
import { Link } from 'react-router-dom';

export default () => {
  return (
    <Menu right>
      <Link to="/">
        Home
      </Link>

      <Link to="/details">
        Portfolio
      </Link>

      <Link to="/services">
        Services
      </Link>

      <Link to="/about">
        About Me
      </Link>

      <Link to="/hire">
        Hire Me
      </Link>
    </Menu>
  );
}