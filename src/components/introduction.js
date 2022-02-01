import React from "react";
import "./introduction.css";
import line from "../assets/line.png";
import ContactForm from "./ContactForm"


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
      <div className='Introduction' id="homepage">
        <div className='Introduction-background'>
        </div>
        <div className="Introduction-overlay">
          <div className="Introduction-overlay-line">
            <img src={line} alt="neon-line"/>
          </div>
          <div class="Introduction-overlay-content">
            <h1>Validated <span className="prototypes"><span className='Introduction-overlay-content-correction'><p>validated</p><p>V</p></ span>concepts</span><br/>in just 6 weeks</h1>
            <p>Planning to expand your business with a brand boosting concept? Through rapid prototyping, we help you validate your ideas' desirablity, feasibility and viability in just 6 weeks. So the next time you pitch your ideas and someone says you've lost your marbles, we've got your back ;)</p>
            <ContactForm />
          </div>
        </div>
      </div>
    );
  };
}

export default Introduction;
