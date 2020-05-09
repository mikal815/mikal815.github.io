import React from 'react';
import { slide as Menu } from "react-burger-menu";
// import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import MediaQuery from 'react-responsive';

export default () => {

  return (
    <MediaQuery maxDeviceWidth={500}>
      <Menu right>
        <Link smooth to="/">
          Home
          </Link>

        <Link smooth to="/mobile/details/#portfolio">
          Portfolio
          </Link>

        <Link smooth to="/mobile/details/#services">
          Services
          </Link>

        <Link smooth to="/mobile/details/#about">
          About Me
          </Link>

        <Link smooth to="/mobile/details/#hire">
          Hire Me
          </Link>
      </Menu>
    </MediaQuery>
  );
}