import React from 'react';
import { slide as Menu } from "react-burger-menu";
import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';


export default () => {
  return (
    <>
      <MediaQuery maxDeviceWidth={500}>
        <Menu right>
          <Link to="/">
            Home
          </Link>

          <Link to="/mobile/details">
            Portfolio
          </Link>

          <Link to="/mobile/services">
            Services
          </Link>

          <Link to="/mobile/about">
            About Me
          </Link>

          <Link to="/mobile/hire">
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