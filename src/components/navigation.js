import React from "react";
import "./navigation.css";
import logo from "../assets/LogoMarbleousDarkBG.png";
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
      <div class="Navigation">
        <ul className={this.state.active ? "menu active" : "menu"}>
          <li className='logo'>
            <a href='#homepage'>
              <img className='brandLogo' src={logo} alt="brandLogo"></img>
            </a>
          </li>
          <li className={this.state.active ? "item active" : "item"}>
            <a href='#AboutUs'>ABOUT US</a>
          </li>
          <li className={this.state.active ? "item active" : "item"}>
            <a href='#OurApproach'>APPROACH</a>
          </li>
          <li className={this.state.active ? "item active" : "item"}>
            <a href='#OurActivities'>ACTIVITIES</a>
          </li>
          <li className={this.state.active ? "item active" : "item"}>
            <a href='#OurMarbles'>MARBLES</a>
          </li>
          <li className={this.state.active ? "item active" : "item"}>
            <a href='#AboutUs'>CONTACT</a>
          </li>
          <li className='toggle' onClick={this.toggleNavBar}>
            <div>
              <FontAwesomeIcon className='toggleBars' icon={faBars} />
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navigation;
