import React from "react";

const NumberButton = ({numbers}) => {
console.log(numbers)
  
  return (
    <>

<button onClick={()=>console.log(numbers)} style={{background:'#9cb6d2',borderRadius:'50px',boxShadow: '0px 3px 2px 0px rgba(0,0,0,0.75)', margin:'3.5%',   border:' #9cb6d2 4px solid',cursor:'pointer'}}>{numbers}</button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </>
  );
};



export default NumberButton