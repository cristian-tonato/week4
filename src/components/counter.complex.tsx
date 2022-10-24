import { useEffect, useState } from "react";
import { Counter } from "./counter";

export function CounterComplex(){

const initialSate={
  counter:0,
  user: "Pepe"
};

  const [state, setState]=  useState(initialSate)
useEffect(()=>{
  console.log(state);
}, [state])


  const handlerCounter=(value: number)=>{
    //counter = counter+value
    setState({ ...state, counter:state.counter+value});
    
  }

  return(
    <>
      <p>{state.counter} </p>
      <button
        onClick={() => {
          handlerCounter(+1)
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          handlerCounter(-1)
        }}
      >
        -
      </button>
    </>
  )
};
