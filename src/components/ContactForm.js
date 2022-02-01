import React, {Component} from 'react';
import './ContactForm.css';
import axios from 'axios';

class ContactForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            formActive: false,
            email:"",
            name:"",
            };
        this.handleClick = this.handleClick.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }
    async componentDidMount(){
        const url = "/leads";
        let response = await axios.get(url);
        let name = response.data[0].email;
        this.setState({name:name});
    }
    handleClick(){
        this.setState({formActive:true});
    }
    handleInput(evt){
        this.setState({[evt.target.name]:evt.target.value});
        console.log(this.state.email);
    }
    handleSubmit(e){
        // get our form data out of state
        const data = {email:this.state.email};
        axios
            .post('/newlead', data)
            .then(response => console.log(response))
            .catch(err => console.log(err));
      };
    render(){
        return(
            <div clasName="ContactForm">
                <form className={this.state.formActive?"ContactForm-form":"ContactForm-form hidden"} onSubmit={this.handleSubmit}>
                    <label htmlFor="email">Contact Form</label><br />
                    <p>Thanks {this.state.name} for showing interest. Please share your e-mail address below and we'll get back to you as soon as possible.</p>
                    <input type="text" id="email" name="email" placeholder="email" value={this.state.email} onChange={this.handleInput} />
                    <button class="ContactForm-form-submitButton" >Submit</button>
                </form>
                <button class={this.state.formActive?"ContactForm-contactButton hidden":"ContactForm-contactButton"} onClick={this.handleClick}>Contact Us</button>
            </div>
        )
    }
}

export default ContactForm