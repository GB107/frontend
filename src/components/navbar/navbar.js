import React from 'react';
import LanguageIcon from '@mui/icons-material/Language';
import './navbar.css'; 

function Navbar() {
    return (
        <div className='mainbg'>
            
        <div className="navbar">
            <div className="navbar-container">
                <div className="navbar-links">
                    <a href="/" className="navbar-link" style={{fontSize:'1.2em'}}>Uber</a>
                    <a href="/ride" className="navbar-link">Ride</a>
                    <a href="/drive" className="navbar-link">Drive</a>
                    <a href="/business" className="navbar-link">Business</a>
                    <a href="/ubereats" className="navbar-link">Uber Eats</a>
                    <a href="/about" className="navbar-link">About</a>
                </div>
                <div className="navbar-actions">
                    <div className="navbar-icon">
                        <LanguageIcon />
                        <span>EN</span>
                    </div>
                    <a href="#" className="navbar-action">Help</a>
                    <a href="#" className="navbar-action">Log In</a>
                    <button className="navbar-action" style={{color:'#000',    padding: '7px',borderRadius:'27px'} }>Sign Up</button>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Navbar;
