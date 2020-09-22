import React from "react"

export default function TextInput(props){
  return(
    <div className="textInput">
      <p className="textInputLabel">{props.label}</p>
      <input className="textInputControl"/>
  </div>
  )
}