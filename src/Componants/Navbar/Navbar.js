import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
               <div className='logo' >
                    <Link className="link" to='/'>
                    <img src={logo} alt="first for kids logo" width="93px" height="80px"/>
                    </Link>
               </div> 
               <div className='menu-icon' onClick={this.handleClick}>
               <i className={ this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
               </div>
               <ul className= {this.state.clicked ? 'nav-list active' : 'nav-list'}>
                    <li className='nav-list-item' onClick={this.handleClick}><Link to='/'>Home</Link></li>
                    <li className='nav-list-item' onClick={this.handleClick}><Link to='/about'>About</Link></li>
                    <li className='nav-list-item' onClick={this.handleClick}><Link to='/enrollment'>Enrollment</Link> </li> 
                    <li className='nav-list-item' onClick={this.handleClick}><Link to='/vpk'>VPK</Link></li>
                    <li className='nav-list-item' onClick={this.handleClick}><Link to='/faq'>FAQ</Link></li>
                    <li className='nav-list-item' onClick={this.handleClick}><Link to='/contactus'>Contact Us</Link></li>
               </ul>
            </div>
        </div>
        )
    }
}

export default NavBar;