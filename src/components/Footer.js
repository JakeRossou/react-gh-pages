import React, {Component} from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faLinkedin, faDribbble } from '@fortawesome/free-brands-svg-icons'

class Footer extends Component {
    render(){
        return (
            <div className="Footer">
                <footer className="site-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-6">
                                <h6>About</h6>
                                <p className="text-justify">We exist to provide our customers with a superpower. The power to identify and develop brand boosting concepts, fastforward into the future and experience customer reactions, before making any expensive commitments.</p>
                            </div>

                            <div className="col-xs-6 col-md-3">
                                <h6>Our Marbles</h6>
                                    <ul className="footer-links">
                                    <li><a href="/monthlyscent">MonthlyScent</a></li>
                                    <li><a href="/">SongRqst</a></li>
                                    <li><a href="/">KikoFood</a></li>
                                    <li><a href="/">StandZero</a></li>
                                    <li><a href="/">RosieDrinks</a></li>
                                    <li><a href="/">BioMe</a></li>
                                </ul>
                            </div>

                            <div className="col-xs-6 col-md-3">
                                <h6>Quick Links</h6>
                                <ul className="footer-links">
                                    <li><a href="/">Home</a></li>
                                    <li><a href="/">Our Promises</a></li>
                                    <li><a href="/">Our Activities</a></li>
                                    <li><a href="/">Our Blog</a></li>
                                    <li><a href="/">Sitemap</a></li>
                                </ul>
                            </div>
                        </div>
                        <hr/>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 col-sm-6 col-xs-12">
                                <p className="copyright-text">Copyright &copy; 2022 All Rights Reserved by 
                                    <a href="/"> Marbleous Concept Agency</a>
                                </p>
                            </div>

                            <div className="col-md-4 col-sm-6 col-xs-12">
                                <ul className="social-icons">
                                    <li><a className="facebook" href="/"><FontAwesomeIcon icon={faFacebook} /></a></li>
                                    <li><a className="twitter" href="/"><FontAwesomeIcon icon={faTwitter} /></a></li>
                                    <li><a className="dribbble" href="/"><FontAwesomeIcon icon={faDribbble} /></a></li>
                                    <li><a className="linkedin" href="/"><FontAwesomeIcon icon={faLinkedin} /></a></li>   
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Footer