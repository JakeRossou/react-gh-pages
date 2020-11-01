import React from "react";
import "./introduction.css";
import { Container, Row, Col, Button } from "react-bootstrap";

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
            <p>Helping large enterprises, SMEs and start-ups conceptualize & validate their moonshots through an iterative build measure, learn approach. Making their future absolutely marbleous.</p>
          </div>
        </div>
        <div className='whoWeAre'>
          <div className='textField' id="AboutUs">
            <p>We all have our marbles.Things we are passionate about, things that make us happy,<br/>things that make us fly… </p>
          <p>Through an iterative build - measure - learn approach, our team of entrepreneurial creatives is eager to help you leverage and expand your unique set of marbles and realize your ambition to fly even higher.*</p> 
          <a href="mailto:gilles.rossou@marbleousconcepts.com"><Button className='introButton' variant='outline-dark'>
            CONTACT US
            </Button></a>
            <p className="peterPanReference">* This reference only makes sense when you're a fan of Peter Pan<br/>(Which we are)</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Introduction;
