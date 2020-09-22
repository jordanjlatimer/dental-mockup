import React from "react"

export default function NumberInput(props){
  return(
    <div className="numberInput">
      <p>{props.label}</p>
      <input className="numberInputControl" type="number"/>
  </div>
  )
}