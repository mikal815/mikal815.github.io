import React from 'react';
import { slide as Menu } from "react-burger-menu";
// import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import { HashLink as Link } from 'react-router-hash-link';

export default () => {

  return (
    <>
      <MediaQuery maxDeviceWidth={500}>
        <Menu right>
          <Link to="/">
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

      <MediaQuery minDeviceWidth={500}>
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
      </MediaQuery>
    </>

  );
}