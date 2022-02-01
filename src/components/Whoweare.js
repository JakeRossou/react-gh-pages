import React, {Component} from 'react';
import './Whoweare.css'

class Whoweare extends Component {
    render(){
        return (
            <div className='Whoweare'>
                <div className='Whoweare-textbox' id="AboutUs">
                    <p>We are here to grant you a superpower. <br/>The power to identify and develop brand boosting concepts, fastforward into the future and experience customer reactions, before making any expensive commitments.</p>
                    <button className='Whoweare-button' href="mailto:gilles.rossou@marbleousconcepts.com">CONTACT US</button>
                </div>
            </div>
        )
    }
}

export default Whoweare