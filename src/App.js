import React,{useState} from "react";
import "./App.css";
// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component
import Operator  from './components/ButtonComponents/OperatorButtons/Operators'

import Numbers from './components/ButtonComponents/NumberButtons/Numbers'
// Logo has already been provided for you. Do the same for the remaining components
import Logo from "./components/DisplayComponents/Logo";

   import Display from './components/DisplayComponents/Display'


import {numbers} from './data'
function App() {

const [ num ,setNum] = useState(numbers)

const [ total, setTotal ] = useState(0)


console.log(total)
  return (
    <div className="container" style={{display:'flex',justifyContent:'center',flexDirection:"column",background:'red',width:'100%'}}>
      <Logo /><Display total={total}/>
      <div className="App" style={{width:'20%',display:'flex',justifyContent:'center',flexDirection:"row"}}>
      <Numbers number={num}   setTotal={setTotal} />
<Operator  />
        {/* STEP 4 - Render your components here and be sure to properly import/export all files */}
      </div>
    </div>
  );
}

export default App;
