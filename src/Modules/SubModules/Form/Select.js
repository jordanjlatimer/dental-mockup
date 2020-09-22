import React, { useState } from "react"
import { IoIosArrowDropdown } from "react-icons/io";

export default function Select(props){
  const[selected, setSelected] = useState(props.placeholder);
  const[open, setOpen] = useState(false);

  return(
    <div className="selectInput">
      <p>{props.label}</p>
      <div className={open ? "selectControl open" : "selectControl"} onClick={() => setOpen(!open)}>
        <p className={selected === props.placeholder ? "selectControlLabel" : "selectControlLabel selected"}>{selected}</p>
        <IoIosArrowDropdown className={open ? "selectIcon open" : ""} size="20px"/>
      </div>
      <div className={open ? "selectMenu open" : "selectMenu"}>
        {props.options.map((item) => {
          return <div className="selectItem" onClick={() => {setOpen(false); setSelected(item)}}>{item}</div>
        })}
      </div>
    </div>
  )
}