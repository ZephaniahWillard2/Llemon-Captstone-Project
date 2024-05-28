import React from "react";


export const data = [
    {
      name: "Peter",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut morbi tincidunt augue interdum. Aliquet bibendum enim facilisis gravida neque. Aliquet bibendum enim facilisis gravida neque."
      
    },
    {
      name: "Clarissa",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut morbi tincidunt augue interdum. Aliquet bibendum enim facilisis gravida neque. Aliquet bibendum enim facilisis gravida neque."
    },
    {
      name: "Jesse",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut morbi tincidunt augue interdum. Aliquet bibendum enim facilisis gravida neque. Aliquet bibendum enim facilisis gravida neque."
    },
    {
      name: "Bill",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut morbi tincidunt augue interdum. Aliquet bibendum enim facilisis gravida neque. Aliquet bibendum enim facilisis gravida neque."
    },
  ];
  
  const Card = ({ handlePointerEvent, name, message, cardStyle }) => {
    return (
      <article className={cardStyle}>
        <div
          className="card"
          onMouseDown={handlePointerEvent}
          onTouchStart={handlePointerEvent}
        >
          <h2 style={{textDecoration:'underline'}}>{name}</h2>
          <p style={{fontSize:'large'}}>{message}</p>
        </div>
      </article>
    );
  };
  
  export default Card;