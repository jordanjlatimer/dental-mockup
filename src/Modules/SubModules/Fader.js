import React from "react"

export default function Fader(props){
  return(
    <div className={props.current ? "fader current" : "fader"}>
      {props.children}
    </div>
  )
}