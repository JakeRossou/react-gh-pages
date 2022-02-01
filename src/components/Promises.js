import React from "react";
import "./Promises.css";
import Hypothesis from "../assets/HypothesisV2.png";
import Build from "../assets/BuildV2.png";
import Measure from "../assets/MeasureV2.png";
import Learn from "../assets/LearnV2.png";
import Repeat from "../assets/RepeatV2.png";

class Promises extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='Promises' id='OurApproach'>
        <div className="Promises-title">
          <h1>Our Promises</h1>
          <p>We provide you with a superpower. The power to identify and develop brand boosting concepts, fastforward into the future and experience customer reactions, before making any expensive commitments.</p>
        </div>
        <div className="Promises-overview">
          <div className="Promises-overview-card"><img src={Hypothesis} alt="Discover"></img><h4 style={{borderColor: "rgb(47,118,151)"}}>DISCOVER</h4><p>We enable you to identify promising opportunities to expand existing brands or build completely new ones.
            </p></div>
          <div className="Promises-overview-card"><img src={Build} alt="Build"></img><h4 style={{borderColor: "rgb(255,39,100)"}}>BUILD</h4><p>We build the ideal marketing materials and prototypes to quickly validate some critical assumptions and de-risk your vision.
</p></div>
          <div className="Promises-overview-card"><img src={Measure} alt="Measure"></img><h4 style={{borderColor: "rgb(84,217,202)"}}>MEASURE</h4><p>We empirically determine your concepts' desirability and viability through well-designed qualitative and quantitative user tests.
</p></div>
          <div className="Promises-overview-card"><img src={Learn} alt="Learn"></img><h4 style={{borderColor: "rgb(32,53,95)"}}>LEARN</h4><p> We provide you with clear, empirically-driven insights to increase the desired product-market fit.
</p></div>
          <div className="Promises-overview-card"><img src={Repeat} alt="Iterate"></img><h4 style={{borderColor: "rgb(47,118,151)"}}>REPEAT</h4><p>We only stop iterating when we’ve developed a unique marble* capable of convincing even the most critical investors.
</p></div>
        </div>
          <p className="Promises-footer">* So the next time you pitch your idea and someone says you've lost your marbles, just show them your marbles ;)</p>
      </div>
    );
  }
}

export default Promises;
