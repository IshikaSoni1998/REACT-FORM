import React, { useState } from "react";
import './App.css'



const App=()=> {
  const [name , setName]= useState();
  const [Fullname , setFullName]= useState();
  const inputEvent=(event)=>{
    console.log(event.target.value);
    setName(event.target.value);


  }
  const onSubmit= ()=>{
    setFullName(name);

  }
  
   return (
    <>
    <div>
    <h1> HELLO {Fullname} </h1>
    <input type ="text" placeholder='ENTER YOUR NAME' onChange={inputEvent}/>
    <button onClick={onSubmit}>SUBMIT</button>
    </div>
    </>
  
  );
  }
  export default App;
