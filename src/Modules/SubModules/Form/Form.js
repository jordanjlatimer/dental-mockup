import React from "react";

export default function Form(props){
  return(
      <div className="form">
        <h2>{props.header}</h2>
        {props.children}
      </div>
  )
}