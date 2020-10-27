import React from "react";
import "./formats.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { faCalendar, faUsers, faMapMarker, faBullseye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Formats extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
  
    render() {
      return (
        <div className='formatPage'>
            <div className="titleRow">
                <h1>OUR FORMATS</h1>
            </div>
            <div className="cardRow">
                <div className="formatCard redBorder">
                    <p className="formatTitle redBackground">Hypothesis Workshop</p>
                    <p className="formatGoal">Identify growth hypothesis<br/>and shape experiment</p>
                    <p className="formatPointers"><FontAwesomeIcon icon={faCalendar} />&nbsp; 1-2 days</p>
                    <p className="formatPointers"><FontAwesomeIcon icon={faUsers} />&nbsp; Guiding exisiting team</p>
                    <p className="formatPointers"><FontAwesomeIcon icon={faMapMarker} />&nbsp; Virtually or at the company</p>
                    <p className="formatPointers"><FontAwesomeIcon icon={faBullseye} />&nbsp; Experiment objectives, approach and endpoints</p>
                    <div className="learnMoreButtonRed">LEARN MORE</div>
                </div>
                <div className="formatCard greenBorder">
                    <p>Iteration Cycle</p>
                </div>
            </div>
        </div>
      );
    }
  }
  
  export default Formats;