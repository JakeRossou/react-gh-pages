import React from "react";
import "./formats.css";
import { faCalendar, faBullseye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import iterationCycleIcon from "../assets/IterationCycleIcon.png";
import arrow from "../assets/Arrow.png";
import workshop from "../assets/HypothesisV2.png";
import iteration from "../assets/RepeatV2.png";
import launch from "../assets/Launch.png";

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
            <p>With a team of seasoned entrepreneurs, we co-create, build, and grow your future business. To do so, the following formats can be pursued seperately, in combination or in iteration. Contact us to get a quote for your needs.</p>
            </div>
            <div className="cardRow">
                <div className="formatCard redBorder">
                    <img className="formatIcon" src={workshop}></img>
                    <div className="formatGoal"><p><b>Identify promising opportunities</b> and design the ideal approach to empirically validate some critical assumptions and de-risk your vision.</p></div>
                    <div className="formatPointers"><p><FontAwesomeIcon icon={faCalendar} />&nbsp; 1-2 Days</p></div>
                    <div className="formatPointers"><p><FontAwesomeIcon icon={faBullseye} />&nbsp; Concept Scoping</p></div>
                    <a href="mailto:info@marbleousconcepts.com"><div className="learnMoreButtonRed">CONTACT US</div></a>
                </div>
                <div className="formatCard greenBorder">
                <img className="formatIcon" src={iteration}></img>
                    <div className="formatGoal"><p><b>Co-develop the envisioned target concept and stress-test your moonshot ideas</b> at breakneck speed</p></div>
                    <div className="formatPointers"><p><FontAwesomeIcon icon={faCalendar} />&nbsp; 4-8 Weeks</p></div>
                    <div className="formatPointers"><p><FontAwesomeIcon icon={faBullseye} />&nbsp; Concept Validation</p></div>
                    <a href="mailto:info@marbleousconcepts.com"><div className="learnMoreButtonGreen">CONTACT US</div></a>
                </div>
                <div className="formatCard blueBorder">
                <img className="formatIcon" src={launch}></img>
                    <div className="formatGoal"><p>Guide your internal team and key partners throughout the entire <b>concept launch</b>, making your future absolutely Marbleous</p></div>
                    <div className="formatPointers"><p><FontAwesomeIcon icon={faCalendar} />&nbsp; 3-6 Months</p></div>
                    <div className="formatPointers"><p><FontAwesomeIcon icon={faBullseye} />&nbsp; Concept Launch</p></div>
                    <a href="mailto:info@marbleousconcepts.com"><div className="learnMoreButtonBlue">CONTACT US</div></a>
                </div>
            </div>
        </div>
      );
    }
  }
  
  export default Formats;