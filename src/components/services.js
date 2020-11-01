import React from "react";
import "./services.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import Hypothesis from "../HypothesisV2.png";
import Build from "../BuildV2.png";
import Measure from "../MeasureV2.png";
import Learn from "../LearnV2.png";
import Repeat from "../RepeatV2.png";
import { faRubleSign } from "@fortawesome/free-solid-svg-icons";

class Services extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='servicesPage' id='OurApproach'>
        <div className="processTitle"><h1>OUR APPROACH</h1></div>
        <div className="serviceOverview">
          <div className="services"><img src={Hypothesis}></img><h4 style={{borderColor: "rgb(47,118,151)"}}>HYPOTHESIS</h4><p>Through creative workshops, we help organizations identify new hypothesis to grow their existing brands or build completely new ones.
            </p></div>
          <div className="services"><img src={Build}></img><h4 style={{borderColor: "rgb(255,39,100)"}}>BUILD</h4><p>Once the different hypothesizes are identified, we set-up a multi-disciplinary team to build and execute the ideal experiment to quickly test the identified growth hypothesizes.
</p></div>
          <div className="services"><img src={Measure}></img><h4 style={{borderColor: "rgb(84,217,202)"}}>MEASURE</h4><p>Throughout the entire experiment, we closely monitor key parameters to determine the viability of the identified growth hypothesis.
</p></div>
          <div className="services"><img src={Learn}></img><h4 style={{borderColor: "rgb(32,53,95)"}}>LEARN</h4><p>Once the experiment is finalized, we analyze the test results and help organizations decide whether to persevere or to pivot.
</p></div>
          <div className="services"><img src={Repeat}></img><h4 style={{borderColor: "rgb(47,118,151)"}}>REPEAT</h4><p>Then, we cycle back to the beginning to take a deep dive into the same direction or to pivot into a new direction. These cycles are repeated until we’ve developed a new and unique marble that will make organizations fly even higher.
</p></div>
        </div>
      </div>
    );
  }
}

export default Services;
