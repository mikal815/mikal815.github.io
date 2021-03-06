import React from 'react';
import { slide as Menu } from "react-burger-menu";
// import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import MediaQuery from 'react-responsive';


export default class TheMenu extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      menuOpen: false
    }
  }

  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen })
  }

  closeMenu() {
    this.setState({ menuOpen: false })
  }



  render() {
    return (
      <MediaQuery maxDeviceWidth={500} >
        <Menu
          right
          isOpen={this.state.menuOpen}
          onStateChange={(state) => this.handleStateChange(state)}
        >
          <Link onClick={() => this.closeMenu()} to="/">
            Home
                </Link>

          <Link onClick={() => this.closeMenu()} smooth to="/mobile/details/#portfolio">
            Portfolio
                </Link>

          <Link onClick={() => this.closeMenu()} smooth to="/mobile/details/#services">
            Skills
                </Link>

          <Link onClick={() => this.closeMenu()} smooth to="/mobile/details/#about">
            About
                </Link>

          <Link onClick={() => this.closeMenu()} smooth to="/mobile/details/#hire">
            Contact
                </Link>
        </Menu>
      </MediaQuery>
    )
  }
}

