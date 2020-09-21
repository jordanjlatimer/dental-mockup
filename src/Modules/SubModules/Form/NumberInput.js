import React from "react"

export default function NumberInput(props){
  return(
    <div className="input">
      <p>{props.label}</p>
      <input type="number"/>
  </div>
  )
}