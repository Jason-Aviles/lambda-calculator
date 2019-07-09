import React,{useState} from "react";



const Display = (props) => {
const [input,setInput] = useState('')
 
handleChange= (event)=>{
  setInput([event.target.name]:event.target.name)
}



  return<div><input  onChange={handleChange} value={input}/></div>


  return <div></div>;
};




export default Display
