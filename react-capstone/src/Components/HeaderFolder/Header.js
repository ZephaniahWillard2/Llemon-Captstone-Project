import React from "react";
import {Link} from 'react-router-dom';
import './HeaderStyles.css'

const Header = () =>{
    return(
        <header>
            <h1>The Little Lemon</h1>
            <nav className="Nav-bar">
                <Link to="/home">Home</Link>
                <a href="">Menu</a>
                <Link to="/reserve">Reserve</Link>
                <a href="">About Us</a>
            </nav>
        </header>
    )

};

export default Header;

// Change a tags to links, add pages to menu and about us