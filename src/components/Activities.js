import React, {Component} from "react"
import './Activities.css'
import Activitycard from "./Activitycard"
import { v4 as uuidv4 } from 'uuid';

class Activities extends Component {
    static defaultProps = {
        cardContent: [
            {cardnumber:"01.", cardtitle: "Knowledge transfer", cardtext: "Three in-depth hourly interviews with the key-stakeholders to transfer domain-specific knowledge, identify the pain points or process inefficiencies, and brainstorm how we can solve them using your envisioned solution.",id:uuidv4()},
            {cardnumber:"02.", cardtitle: "Market Research", cardtext: "Extensive desk search to get an in depth understanding of the market, the market trends, the relevant customer segmentations, the competitive landscape and the industry eco-system.",id:uuidv4()},
            {cardnumber:"03.", cardtitle: "Build a killer value proposition", cardtext: "We crystallize your thoughts into a killer value proposition reflecting the key values you want to advertise and deliver with your concept and make it simply irresistable.",id:uuidv4()},
            {cardnumber:"04.", cardtitle: "Identify key concept components", cardtext: "Identify the key components central to delivering the envisaged value proposition. For digital concepts, this might include mobile and web apps, a chatbot, content management system, back end, admin panel, cloud infrastructure, or useful 3rd-party API integrations. For physical products it might include ingredients, packaging formats, marketing material, production facilities, co-manufacturers, co-packers, (online) retailers, delivery services etc.",id:uuidv4()},
            {cardnumber:"05.", cardtitle: "Mapping user journeys", cardtext: "Map out user journeys describing when and how stakeholders interact with your concept, and which value propositions and key components drive the interaction.",id:uuidv4()},
            {cardnumber:"06.", cardtitle: "Prioritize key features", cardtext: "List all features to consider, including those that will not be executed in the MVP (Minimum Viable Product) or first release.",id:uuidv4()},
            {cardnumber:"07.", cardtitle: "Design", cardtext: "Based on existing specifications, a dedicated UX/UI designer brings your concept to life in 10 concrete designs. This number has been proven to be optimal to focus on the concept’s core values. The iterative design process involves your feedback and moves from rough sketches to polished designs.",id:uuidv4()},
            {cardnumber:"08.", cardtitle: "Prototype", cardtext: `We create a concept prototype of "Goldilocks Quality", real enough to evoke honest, reliable and valuable reactions from our customers during the validation phase, but not too real to avoid spending too much time and resources on a concept which might not have a market-fit after all. This offers you the freedom to quickly pivot into a new direction whenever it seems advisable.`,id:uuidv4()},
            {cardnumber:"09.", cardtitle: "Validate", cardtext: `Finally, the prototype is presented to 5 test users, either sourced online or provided by the client, with a concrete set of test scenarios and tasks. We monitor how well users understand the product proposition, how well the prototype performs, and whether they might be interested in buying the solution whenever the concept becomes available.`,id:uuidv4()},
            {cardnumber:"10.", cardtitle: "Iterate", cardtext: `The activities presented above should not be seen as a linear process. We continuously switch between the different activities, and iterate until we’ve developed the perfect prototype reflecting an optimal market-fit.`,id:uuidv4()},
        ]
    }; 
    render(){
        return (
            <div className="Activities" id="OurActivities">
                <h1 className="Activities-title">Our Activites</h1>
                <p className="Activities-paragraph">We structure our rapid prototyping along the following activities:</p>
                <div className="Activities-cardholder">
                    {this.props.cardContent.map((card) => (
                    <Activitycard cardnumber={card.cardnumber} cardtitle={card.cardtitle} cardtext={card.cardtext} key={card.id} />
                    ))}
                </div>
                <div className = "Activities-conditions">
                    <div className = "Activities-conditions-card">
                        <p className = "Activities-conditions-card-text">Price:</p>
                        <p className = "Activities-conditions-card-number">€15,000-€25,000</p>
                    </div>
                    <div className = "Activities-conditions-card">
                        <p className = "Activities-conditions-card-text">Timeline:</p>
                        <p className = "Activities-conditions-card-number">6 weeks</p>
                    </div>
                </div>
                <button class="Activities-overlay-content-button" href="mailto:info@marbleousconcepts.com" >Contact Us</button>
            </div>
        )
    }
}

export default Activities