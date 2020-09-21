import React from "react"

export default function StatCard(props){
  return(
    <div className="statCard">
      <h1>{(props.money ? "$" : "") + props.value + (props.percentage ? "%" : "")}</h1>
      <h2>{props.header}</h2>
    </div>
  )
}