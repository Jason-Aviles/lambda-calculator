import React from "react";

const OperatorButton = (props) => {
  console.log(props.operator.char)
  return (
    <>

    <button style={{background:'lightblue',borderRadius:'50px',boxShadow: '0px 3px 2px 0px rgba(0,0,0,0.75)', marginBottom:'.5%',   border:' #add4e0 4px solid'}}>{props.operator.char}</button>

      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </>
  );
};


export default OperatorButton
