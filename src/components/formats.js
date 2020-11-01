import React from "react";
import "./formats.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { faCalendar, faUsers, faMapMarker, faBullseye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import iterationCycleIcon from "../IterationCycleIcon.png";
import arrow from "../Arrow.png";

class Formats extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
  
    render() {
      return (
        <div className='formatPage' id="OurFormats">
            <div className="titleRow">
                <h1>OUR FORMATS</h1>
            </div>
            <div className="cardRow">
                <div className="formatCard redBorder">
                    <div className="formatTitle redBackground"><p>HYPOTHESIS WORKSHOP</p></div>
                    <div className="formatGoal"><p>We help you identify growth assumptions and design the ideal experiment to empirically test these assumptions</p></div>
                    <div className="formatPointers"><p><FontAwesomeIcon icon={faCalendar} />&nbsp; 1-2 days</p></div>
                    <div className="formatPointers"><p><FontAwesomeIcon icon={faBullseye} />&nbsp; Experiment Set-Up</p></div>
                    <div className="learnMoreButtonRed">LEARN MORE</div>
                </div>
                <img className='iterationCycleIcon' src={iterationCycleIcon}></img>
                <div className="formatCard greenBorder">
                <div className="formatTitle greenBackground"><p>ITERATION CYCLE</p></div>
                    <div className="formatGoal"><p>We co-develop the envisioned target concept and stress-test your growth assumptions at breakneck speed</p></div>
                    <div className="formatPointers"><p><FontAwesomeIcon icon={faCalendar} />&nbsp; 3-6 Weeks</p></div>
                    <div className="formatPointers"><p><FontAwesomeIcon icon={faBullseye} />&nbsp; Validated Concept</p></div>
                    <div className="learnMoreButtonGreen">LEARN MORE</div>
                </div>
                <img className='arrow' src={arrow}></img>
                <div className="formatCard blueBorder">
                <div className="formatTitle blueBackground"><p>CONCEPT LAUNCH</p></div>
                    <div className="formatGoal"><p>We guide your internal team and key partners throughout the entire concept launch, making your future absolutely marbleous</p></div>
                    <div className="formatPointers"><p><FontAwesomeIcon icon={faCalendar} />&nbsp; 3-6 Months</p></div>
                    <div className="formatPointers"><p><FontAwesomeIcon icon={faBullseye} />&nbsp; Marbleous Future</p></div>
                    <div className="learnMoreButtonBlue">LEARN MORE</div>
                </div>
            </div>
        </div>
      );
    }
  }
  
  export default Formats;