import React from "react";
import "./introduction.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import introImage from "../introImage.png";

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
            <p>At marbleous, we will help your organization conceptualize its wildest dreams through an iterative build measure, learn approach. Making your company's future absolutely marbleous.</p>
          </div>
        </div>
        <div className='whoWeAre'>
          <div className='textField'>
            <p>
            We all have our marbles
            Things we are good at, things we are 
            passionate about, things that make us happy,
            things that make us fly… </p>

          <p>Through an iterative process 
              we help organizations expand their set of marbles 
              and realize their ambition to fly even higher</p> 
            <Button className='introButton' variant='outline-dark'>
              GET TO KNOW US
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Introduction;
