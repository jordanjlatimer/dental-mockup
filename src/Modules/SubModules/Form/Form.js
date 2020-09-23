import React from "react";

export default function Form(props){
  return(
      <div className="form">
        <h1 className="formHeader">{props.header}</h1>
        {props.children}
      </div>
  )
}