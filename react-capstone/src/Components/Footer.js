import React from "react";
import './FooterStyles.css'


const Footer = ()=>{
    return(
        <footer className='footer'>
            <div className="flex-container">
                <div className="logo">Logo</div>
                <div className="contact">Contact</div>
                <div className="social">Social</div>
                <div className="careers">Careers</div>
            </div>
        </footer>
    );
};

export default Footer;