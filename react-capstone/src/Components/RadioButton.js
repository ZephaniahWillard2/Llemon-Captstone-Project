import React from "react";

const RadioButton = (props)=>{
    return(
        <div id="radio" style={{fontSize:'larger'}}> Location <br></br>
            <label style={{fontSize:'large'}}>Inside
                <input type='radio' value="option1" checked={props.selectedOption === 'option1'} onChange={props.handleChange}></input>
            </label>
            <label style={{fontSize:'large', paddingLeft:'30px'}}>Outside
                <input type='radio' value="option2" checked={props.selectedOption === 'option2'} onChange={props.handleChange}></input>
            </label>
        </div>
    )
};

export default RadioButton;