import React,{useState} from "react";
import OperatorButtons from './OperatorButton'
//import any components needed

//Import your array data to from the provided data file
import {operators} from '../../../data'

const Operators = () => {
const [operator,setOperator] = useState(operators)


  // STEP 2 - add the imported data to state
  return (
    <div style={{display:'flex', justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
      {
        
        
        operator.map((item,i) => <OperatorButtons key={i} operator={item}/>)
        
        
        
        /* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};


export default Operators