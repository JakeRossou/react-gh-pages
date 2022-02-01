
import React,{Component} from "react";
import "./Homepage.css";
import "./navigation.css";
import Navigation from "./navigation.js";
import Introduction from "./introduction.js";
import Promises from "./Promises.js";
import Marbles from "./marbles.js"
import Activities from "./Activities.js";

class Homepage extends Component{
    render(){
        return (
            <div className='Homepage'>
                <nav class="App" id='navigationBar'>
                    <Navigation />
                </nav>
                <Introduction />
                <Marbles />
                <Promises />
                <Activities />
            </div>
        )
    }
}
      
export default Homepage