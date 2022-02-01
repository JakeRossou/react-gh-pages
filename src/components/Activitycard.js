import React, {Component} from 'react';
import './Activitycard.css'

class Activitycard extends Component {
    render(){
        return (
        <div className="Activitycard">
            <div className="Activitycard-number">
                <h2>{this.props.cardnumber}</h2>
            </div>
            <div className="Activitycard-content">
                <h1 className="Activitycard-content-title">{this.props.cardtitle}</h1>
                <p className="Activitycard-content-paragraph">{this.props.cardtext}</p>
            </div>
        </div>
        )
    }
}

export default Activitycard