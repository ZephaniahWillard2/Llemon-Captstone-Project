import React from "react";

const RadioButton = (props)=>{
    return(
        <div id="radio"> Location <br></br>
            <label>Inside
                <input type='radio' value="option1" checked={props.selectedOption === 'option1'} onChange={props.handleChange}></input>
            </label>
            <label>Outside
                <input type='radio' value="option2" checked={props.selectedOption === 'option2'} onChange={props.handleChange}></input>
            </label>
        </div>
    )
};

export default RadioButton;