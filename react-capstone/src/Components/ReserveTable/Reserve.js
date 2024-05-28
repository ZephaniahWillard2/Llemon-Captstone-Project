import React from "react";
import { Link } from "react-router-dom";
import './ReserveStyles.css';

const Reserve = () =>{
    return(

            <div className="reserve-container">
                <div className="text-container">
                    <h2>Save a Table Now!</h2>
                    <h3>Join us in our dining room or outdoor patio for dinner and cocktails! Bring the whole family!</h3>
                    <Link to="/reserve a table" className="reserve-table">Reserve a Table</Link>

                </div>
                <img className="image-container" src="https://images.pexels.com/photos/984888/pexels-photo-984888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"></img>
            </div>

    )
};

export default Reserve;