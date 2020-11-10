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
      <ul className={this.state.active ? "menu active" : "menu"}>
        <li className='logo'>
          <a href='#'>
            <img className='brandLogo' src={logo}></img>
          </a>
        </li>
        <li className={this.state.active ? "item active" : "item"}>
          <a href='#AboutUs'>ABOUT US</a>
        </li>
        <li className={this.state.active ? "item active" : "item"}>
          <a href='#OurApproach'>APPROACH</a>
        </li>
        <li className={this.state.active ? "item active" : "item"}>
          <a href='#OurFormats'>FORMATS</a>
        </li>
        <li className={this.state.active ? "item active" : "item"}>
          <a href='#'>MARBLES</a>
        </li>
        <li className={this.state.active ? "item active" : "item"}>
          <a href='#AboutUs'>CONTACT</a>
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
