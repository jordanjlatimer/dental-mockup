import React from "react"
import { Line } from "react-chartjs-2"

const lineData1 = {
  labels: ["Order Expenses"],
  datasets: [{
    label: "Order Expenses",
    data: [1, 3, 4, 5, 7, 9, 6, 7, 9, 10, 10]
  }]
}

export default function Graphs(props){
  return(
    <div className="graphs">
      <div className="graph">
        <Line data={lineData1}/>
      </div>
      <div className="graph">
        <Line data={lineData1}/>
      </div>
      <div className="graph">
        <Line data={lineData1}/>
      </div>
      <div className="graph">
        <Line data={lineData1}/>
      </div>
    </div>
  )
}