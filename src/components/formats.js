import React from "react";
import "./formats.css";
import { faCalendar, faBullseye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import iterationCycleIcon from "../IterationCycleIcon.png";
import arrow from "../Arrow.png";
import workshop from "../HypothesisV2.png";
import iteration from "../RepeatV2.png";
import launch from "../Launch.png";

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
            <div className="descriptionRow">
            <p>The following formats can be persued seperately, in combination or in iteration. <br/>Contact us to get a quote for your needs.</p>
            </div>
            <div className="cardRow">
                <div className="formatCard redBorder">
                    <img className="formatIcon" src={workshop}></img>
                    <div className="formatGoal"><p>We help you <b>identify growth assumptions</b> and design the ideal experiment to empirically test these assumptions</p></div>
                    <div className="formatPointers"><p><FontAwesomeIcon icon={faCalendar} />&nbsp; 1-2 days</p></div>
                    <div className="formatPointers"><p><FontAwesomeIcon icon={faBullseye} />&nbsp; Experiment Set-Up</p></div>
                    <div className="learnMoreButtonRed">LEARN MORE</div>
                </div>
                <div className="formatCard greenBorder">
                <img className="formatIcon" src={iteration}></img>
                    <div className="formatGoal"><p>We <b>co-develop the envisioned target concept and stress-test your assumptions</b> at breakneck speed</p></div>
                    <div className="formatPointers"><p><FontAwesomeIcon icon={faCalendar} />&nbsp; 3-6 Weeks</p></div>
                    <div className="formatPointers"><p><FontAwesomeIcon icon={faBullseye} />&nbsp; Validated Concept</p></div>
                    <div className="learnMoreButtonGreen">LEARN MORE</div>
                </div>
                <div className="formatCard blueBorder">
                <img className="formatIcon" src={launch}></img>
                    <div className="formatGoal"><p>We guide your internal team and key partners throughout the entire <b>concept launch</b>, making your future absolutely marbleous</p></div>
                    <div className="formatPointers"><p><FontAwesomeIcon icon={faCalendar} />&nbsp; 3-6 Months</p></div>
                    <div className="formatPointers"><p><FontAwesomeIcon icon={faBullseye} />&nbsp; Launched Product</p></div>
                    <div className="learnMoreButtonBlue">LEARN MORE</div>
                </div>
            </div>
        </div>
      );
    }
  }
  
  export default Formats;