import React from "react";
import "./marbles.css";
import MarblesTile from "./MarblesTile";
import { v4 as uuidv4 } from 'uuid';

class Marbles extends React.Component {
  static defaultProps = {
    marbles : 
    [
      {title: `MonthlyScent`, description: `Find your signature scent for every season, mood and occasion.`, id:uuidv4()},
    ],
    futureMarbles: 
    [
      {title: `SongRqst`, description: `Allowing your guests to request and upvote their favorite songs`,id:uuidv4()},
      {title: `StandZero`, description: `Follow amateur sport games from the comfort of your home.`,id:uuidv4()},
      {title: `KikoFood`, description: `Goodbye compromise.
    Deliciously healthy cookies for kids.`,id:uuidv4()},
      {title: `RosieWines`, description: `High quality sparkling rosé wine for whenever, wherever.`,id:uuidv4()},
      {title: `BioMe`, description: `No guts no glory. Optimize your immunity by boosting your biome.`,id:uuidv4()},
    ]
  }  

    render() {
      return (
        <div className='Marbles' id='OurMarbles'>
          <div className='Marbles-title'>
            <h1>Our Work</h1>
            <p>We love prototyping both physical and digital concepts. But wherever we can fuse them together, that's where we really get excited. Check out some of our most recent marbles below:</p>
          </div>
          <div className='Marbles-tiles'>
            {this.props.marbles.map((marble) => 
            (<a href={`/${marble.name}`}><MarblesTile title={marble.title} description={marble.description} key={marble.id} caseText='Check out our case' /></a>)
            )}
            {this.props.futureMarbles.map((marble) => 
            <MarblesTile title={marble.title} description={marble.description} key={marble.id} caseText='Case coming soon' />
            )}
          </div>
          <button class="Marbles-overlay-content-button" href="mailto:info@marbleousconcepts.com" >Contact Us</button>
        </div>
      );
    }
}

export default Marbles;