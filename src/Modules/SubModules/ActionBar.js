import React from "react";
import { IoIosAddCircle, IoIosSearch } from "react-icons/io";

export default function ActionBar(props){
  return(
    <div className="actionBar">
      <div className="searchInput">
        <IoIosSearch className="searchIcon" size="24px"/>
        <input className="searchInputControl"/>
      </div>
      <div className="button positive" onClick={() => props.callback("add")}>
        <IoIosAddCircle className="buttonIcon" size="24px"/>
        <p className="buttonLabel">{props.addLabel}</p>
      </div>
    </div>
  )
}