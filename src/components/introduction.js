import React from "react";
import "./introduction.css";

class Introduction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.moveBubble = this.moveBubble.bind(this);
  }

  moveBubble() {
    var pos = document.documentElement;
    pos.addEventListener("mousemove", (e) => {
      pos.style.setProperty("--x", e.clientX + "px");
      pos.style.setProperty("--y", e.clientY + "px");
    });
  }

  render() {
    return (
      <div className='introductionPage'>
        <div className='titlePage'>
          <div className="titlePageText">
            <h3>ITER</h3>
            <h1><span className="lineThrough">CRE</span>ATIVE CONCEPT AGENCY</h1>
            <p>Enabling large enterprises, SMEs and start-ups to build and validate their moonshot concepts and branding through an iterative build measure, learn approach. Making their future absolutely marbleous.</p>
          </div>
        </div>
        <div className='whoWeAre'>
          <div className='textField' id="AboutUs">
            <p>We are here to grant you a superpower. <br/>A power enabling you to fastforward into the future and experience your finished product and customer reactions, before making any expensive commitments.</p>
            <div className="buttonRow">
              <a href="mailto:gilles.rossou@marbleousconcepts.com">
                <div className='introButton' variant='outline-dark'>
            CONTACT US</div>
              </a> 
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Introduction;
