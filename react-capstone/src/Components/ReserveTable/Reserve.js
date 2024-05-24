import React from "react";
import './ReserveStyles.css';

const Reserve = () =>{
    return(

            <div className="reserve-container">
                <div className="text-container">
                    <h2>Save a Table Now!</h2>
                    <h3>Join us in our dining room our outdoor patio for dinner and cocktails! Bring the whole family!</h3>
                    <button>Reserve a Table</button>
                </div>
                <img className="image-container" src="https://images.pexels.com/photos/984888/pexels-photo-984888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"></img>
            </div>

    )
};

export default Reserve;