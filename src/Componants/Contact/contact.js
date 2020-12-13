import React, { Component } from 'react';
// import axios from 'axios';
import './contact.styles.css';

class Contact extends Component {
    constructor(props){
        super(props);
        this.state = {
            fname: '',
            lname: '',
            email: '',
            phone: '',
            message: ''
        };
        this.handleFNameChange = this.handleFNameChange.bind(this);
        this.handleLNameChange = this.handleLNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.handleMessageChange = this.handleMessageChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    

    handleSubmit(event){
        event.preventDefault();
        console.log(this.state.fname, this.state.lname, this.state.email, this.state.phone, this.state.message)
        this.resetForm()
    };

    resetForm(){
        this.setState({fname: '', lname: '', email: '', phone: '', message: ''})
    }

  

    handleFNameChange(event){
        this.setState({fname: event.target.value})
    }
    handleLNameChange(event){
        this.setState({lname: event.target.value})
    }
    handleEmailChange(event){
        this.setState({email: event.target.value})
    }
    handlePhoneChange(event){
        this.setState({phone: event.target.value})
    }
    handleMessageChange(event){
        this.setState({message: event.target.value})
    }
    

    render(){
        return (
    <div className="outer-div">
    <div className="contact-form">
        <h1 className="contact-title">Contact Us</h1>
        <form  id="contact-form"  action="https://formkeep.com/f/957f83998e7c"
            accept-charset="UTF-8" enctype="multipart/form-data" method="POST">
            <ul className="wrapper">
                <li className="form-row">
                    {/* <label className="fname" htmlFor="fname">First Name:</label> */}
                    <input type="text" id="fname" name="first_name" onChange={this.handleFNameChange}  value={this.state.fname} placeholder="First Name"/>
                </li>
                <li className="form-row">
                    {/* <label className="lname" htmlFor="lname">Last Name:</label> */}
                    <input type="text" id="lname" name="last_name" onChange={this.handleLNameChange}  value={this.state.lname} placeholder="Last Name"/>
                </li>
                <li className="form-row">
                    {/* <label className="email" htmlFor="email">E-mail:</label> */}
                    <input type="email" id="email" name="email" onChange={this.handleEmailChange} value={this.state.email}  placeholder="Email"/>
                </li>
                <li className="form-row">
                    {/* <label className="phone" htmlFor="phone">Phone:</label> */}
                    <input type="tel" id="phone" onChange={this.handlePhoneChange} value={this.state.phone} name="phone_number" placeholder="Phone Number"/>
                </li>
                <li className="form-row">
                    {/* <label className="message" htmlFor="message">Message:</label> */}
                    <textarea name="message" rows="4" cols="35" id="comment" onChange={this.handleMessageChange} value={this.state.message} placeholder="Type message here."></textarea>
                </li>
                <li className="form-row">
                    <button className="contact-button" type="submit" value='submit'>Submit</button>
                </li>
            </ul>
        </form>
    </div>
    </div>
        )}}

export default Contact;