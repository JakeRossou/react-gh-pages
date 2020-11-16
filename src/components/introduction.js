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
            <p>Avoid bad investments by iteratively validating your moonshot ideas to build or expand your brand. Making your future absolutely Marbleous.</p>
          </div>
        </div>
        <div className='whoWeAre'>
          <div className='textField' id="AboutUs">
            <p>We are here to grant you a superpower. <br/>The power to identify and develop brand boosting concepts, fastforward into the future and experience customer reactions, before making any expensive commitments.</p>
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
