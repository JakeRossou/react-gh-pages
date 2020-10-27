import React from "react";
import "./navigation.css";
import logo from "../LogoMarbleousDarkBG.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
    this.toggleNavBar = this.toggleNavBar.bind(this);
  }

  toggleNavBar() {
    if (this.state.active) {
      this.setState({ active: false });
    } else {
      this.setState({ active: true });
    }
  }

  render() {
    return (
      <ul className='menu'>
        <li className='logo'>
          <a href='#'>
            <img className='brandLogo' src={logo}></img>
          </a>
        </li>
        <li className={this.state.active ? "item active" : "item"}>
          <a href='#'>Services</a>
        </li>
        <li className={this.state.active ? "item active" : "item"}>
          <a href='#'>Approach</a>
        </li>
        <li className={this.state.active ? "item active" : "item"}>
          <a href='#'>Marbles</a>
        </li>
        <li className={this.state.active ? "item active" : "item"}>
          <a href='#'>Pixies</a>
        </li>
        <li className={this.state.active ? "item active" : "item"}>
          <a href='#'>Contact</a>
        </li>
        <li className='toggle' onClick={this.toggleNavBar}>
          <a href='#'>
            <FontAwesomeIcon className='toggleBars' icon={faBars} />
          </a>
        </li>
      </ul>
    );
  }
}

export default Navigation;
