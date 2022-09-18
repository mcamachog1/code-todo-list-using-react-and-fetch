//import react into the bundle
import React, { useState } from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

const Home = () => {
  const [inputValue, setInputValue ] = React.useState('');
    
  const validateInput = () => {
    if(inputValue === "") alert("The input cannot be empty");
    else alert("All perfect!");
  };
  return <div>
      <input type="text" onChange={(e) => {
      return setInputValue(e.target.value);
    }} value={inputValue} />
      <button onClick={validateInput}>Click to validate empty</button>
  </div>;
};

//render your react application
ReactDOM.render(<Home />, document.querySelector("#app"));
