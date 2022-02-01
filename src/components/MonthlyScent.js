import React, {Component} from "react";
import brainstorm from "../assets/Brainstorm.jpg";
import back from "../assets/back.svg";
import "./MonthlyScent.css";

class MonthlyScent extends Component{
    render(){
        return (
            <div className="MonthlyScent">
                <div className="MonthlyScent-case">
                    <div className="backButton">
                        <a href="/#OurMarbles"><img src={back} alt="back button"/>Back</a>
                    </div>
                    <div className="MonthlyScent-case-title">
                        <h3>CASE STUDY</h3>
                        <h1>Building a digital brand experience</h1>
                    </div>
                    <div className="DeviderImage"></div>
                    <div className="MonthlyScent-case-introduction">
                        <h1>Exploring scents from the comfort of your home</h1>
                        <p>The global COVID-19 pandemic accelerated the pace of digital transformation beyond recognition. Almost overnight, businesses around the globe found the way they interacted with their customers turned on its head. For some businesses, this meant an entirely new business model needed to be put in place - and rapidly.</p>
                        <p>Our client is one of Belgian's leading perfume retailers. Prior to COVID 19, the overwhelming majority of their sales took place at in-person retail visits. When lockdown restrictions hit their business, our client started looking for opportunities to extend their unique offering and experience into the digital world.</p>
                    </div>
                    <div className="MonthlyScent-case-details">
                        <div className="MonthlyScent-case-details-title">
                            <h2>The Challenge</h2>
                        </div>
                        <div className="MonthlyScent-case-details-text">
                            <p>Due to its convenience and competitive pricing, consumers increasingly purchase their perfumes online. This trend is not new and has already been ongoing prior to the pandemic. But despite its attractiveness, online retailers do not provide consumers a great experience to explore new scents and brands.</p>
                            <p>Our client differentiates themselves from online retailers by offering its customers the opportunity to explore new perfume brands under the personal guidance of an experienced salesforce.</p>
                            <p>When this people-centric business model got highly challenged during the pandemic, Marbleous was asked to help discover, prototype and validate digital concepts which could extend their physical offering into the digital world while safeguarding their unique brand values and premium customer experience.</p>
                        </div>
                        <div className="MonthlyScent-case-details-title">
                            <h2>Our Approach</h2>
                        </div>
                        <div className="MonthlyScent-case-details-text">
                            <p>In order to identify a unique digital concept for our client, we first got up to speed with our client's vision, strategic positioning, innovation roadmap, existing customer base and market trends.  To do so, we conducted a couple of 1h interviews with some key company stake-holders, complemented with a couple of external customer interviews and some in-depth desk research.</p>
                            <p>Once we had a good view on the existing opportunities worth exploring, we organized a 4h brainstorm session together with the client to identify and prioritize the killer concept to explore through rapid prototyping.</p>
                            <img src={brainstorm} alt="Brainstorm"></img>
                            <p>Through our unique team of seasoned entrepreneurs, designers and developers, we quickly turned the concept vision into a prototype ready to be tested by consumers. To do so, we released a small online marketing campaign to measure the concept attractiveness and at the same time identify some potential early adaptors, willing to test our initial prototype.</p>
                            <img src="https://monthlyscent.herokuapp.com/assets/MonthlyExperience.png" alt="Experience Box"></img>
                        </div>
                        <div className="MonthlyScent-case-details-title">
                            <h2>The Results</h2>
                        </div>
                        <div className="MonthlyScent-case-details-text">
                            <p>In less than 6 weeks, we were able to identify, build and validate an initial prototype of the MonthlyScent experience box and app. Through our unique appoach of rapid prototyping, we were able to help our client:
                                <ul>
                                    <li>build a list of promising opportunities to explore in the digital world and envision entirely new business models to boost their company's growth.</li>
                                    <li> gather real world evidence on the desirability and feasibility of the envisioned "MonthlyScent" concept, tremendously reducing the cost and risk of building the real deal.</li>
                                    <li>identify the required partners and components needed to build a viable solution.</li>
                                </ul> 
                            Check out the details of the envisioned concept at <a href="https://monthlyscent.herokuapp.com" target="_blank" rel="noopener noreferrer">monthlyscent.herokuapp.com</a>.
                            <img src="https://monthlyscent.herokuapp.com/assets/MatchingAlgorithm.png" alt="Mobile App"></img>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            )
    }
}

export default MonthlyScent