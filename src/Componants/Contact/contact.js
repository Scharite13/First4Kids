import React, { Component } from 'react';
// import axios from 'axios';
import './contact.styles.css';

class Contact extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            phone: '',
            message: ''
        };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.handleMessageChange = this.handleMessageChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    

    handleSubmit(event){
        event.preventDefault();
        console.log(this.state.name, this.state.email, this.state.phone, this.state.message)
        this.resetForm()
    };

    resetForm(){
        this.setState({name: '', email: '', phone: '', message: ''})
    }

  

    handleNameChange(event){
        this.setState({name: event.target.value})
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
    <div>
        <form className="contact-form" id="contact-form" onSubmit={this.handleSubmit}>
            <label htmlFor="name">Name:</label><br></br>
            <input type="text" id="name" name="name" onChange={this.handleNameChange}  value={this.state.name} placeholder="Name"/><br></br>
            <label htmlFor="email">E-mail:</label><br></br>
            <input type="email" id="email" name="email" onChange={this.handleEmailChange} value={this.state.email}  placeholder="JohnDoe@email.com"/><br></br>
            <label htmlFor="phone">Phone:</label><br></br>
            <input type="tel" id="phone" onChange={this.handlePhoneChange} value={this.state.phone} name="phone"/><br></br>
            <label htmlFor="message">Message:</label><br></br>
            <textarea name="message" rows="4" cols="35" id="comment" onChange={this.handleMessageChange} value={this.state.message}></textarea><br></br>
            <button type="submit" value='submit'>Submit</button>
        </form>
    </div>
        )}}

export default Contact;