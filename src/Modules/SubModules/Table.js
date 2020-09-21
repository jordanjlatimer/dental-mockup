import React, { useState } from "react";
import RecordActions from "./RecordActions";

export default function Table(props){
  const [activeRow, setActiveRow] = useState(null)

  return(
    <table>
      <thead>
        <tr>
          {props.data.headers.map((header) => {
            return <th key={header}>{header}</th>
          })}
        </tr>
      </thead>
      <tbody>
        {props.data.rows.map((row, i) => {
          return (
            <tr key={i} onClick={() => activeRow === i ? setActiveRow(null) : setActiveRow(i)} className={activeRow === i ? "active" : ""}>
              {row.map((cell, j) => {
                return (
                  <td key={j}>
                    {cell}
                    {j === row.length - 1 && activeRow === i ? (
                      <RecordActions recordDesc={props.recordDesc} modalCallback={props.modalCallback} icons={props.recActProps}/>
                      ) : null}
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}