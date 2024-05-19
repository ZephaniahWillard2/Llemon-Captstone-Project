import React from "react";
import {Link} from 'react-router-dom';

const Header = () =>{
    return(
        <header>
            <h1>The Little Lemon</h1>
            <nav className="Nav-bar">
                <a href="">Home</a>
                <a href="">Menu</a>
                <a href="">Reserve a Table</a>
                <a href="">About Us</a>
                {/* <Link to="/">Home</Link>
                <Link>Menu</Link>
                <Link>Reserve a Table</Link>
                <Link>About Us</Link> */}
            </nav>
        </header>
    )
};

export default Header;