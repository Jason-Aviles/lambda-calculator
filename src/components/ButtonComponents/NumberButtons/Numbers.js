import React,{useState} from "react";
import NumBtn from './NumberButton'
//import any components needed

//Import your array data to from the provided data file
import {numbers} from '../../../data'
const Numbers = () => {
  // STEP 2 - add the imported data to state

const [number ,setNumbers ]= useState(numbers)


  return (



    <div style={{width:'9%'}}>
      {
        number.map((item,i) => <NumBtn key={i}  numbers={item}/>)
        
        
        /* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};


export default Numbers
