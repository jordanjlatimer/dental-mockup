import React from "react";

export default function SidebarItem(props){

  return(
    <div className={props.active ? "sidebarItem active" : "sidebarItem"} onClick={props.onClick}>
      {props.icon}
      <p className="sidebarItemLabel">{props.label}</p>
    </div>
  )
}