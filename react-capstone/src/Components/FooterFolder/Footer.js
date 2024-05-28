import React from "react";
import './FooterStyles.css';
import Logo from "../../Assets/Logo.png"; 

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="flex-container">
                <img src={Logo} className="logo" alt="Logo"/> 
                <div className="contact">Contact</div>
                <div className="social">Social</div>
                <div className="careers">Careers</div>
            </div>
        </footer>
    );
};

export default Footer;
