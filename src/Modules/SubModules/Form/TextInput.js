import React from "react"

export default function TextInput(props){
  return(
    <div className="input">
      <p>{props.label}</p>
      <input/>
  </div>
  )
}