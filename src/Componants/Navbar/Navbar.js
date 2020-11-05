import React, { Component } from 'react';
import './Navbar.styles.css';
import logo from "../../Images/LOGO_first-for-kids.png";



class NavBar extends Component {
    state = {
        clicked: false
    }

    handleClick = () => {
        this.setState( {clicked: !this.state.clicked})
    }

    
    render(){
        return (
        <div className="parent">
            <div className='navbar-container'>
               <div className='logo'>
                    <img src={logo} alt="first for kids logo" width="93px" height="80px"/>
               </div> 
               <div className='menu-icon' onClick={this.handleClick}>
               <i className={ this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
               </div>
               <ul className= {this.state.clicked ? 'nav-list active' : 'nav-list'}>
                   <li className='nav-list-item'><a href="#hero">Home</a></li>
                   <li className='nav-list-item'><a href="#about-me">Enrollment</a></li>
                   <li className='nav-list-item'><a href="#resume">VPK</a></li>
                   <li className='nav-list-item'><a href="#projects">FAQ</a></li>
                   <li className='nav-list-item'><a href="#contact">Contact Us</a></li>
               </ul>
            </div>
        </div>
        )
    }
}

export default NavBar;