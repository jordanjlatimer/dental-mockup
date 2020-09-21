import React from "react";
import { IoIosAddCircle, IoIosSearch } from "react-icons/io";

export default function ActionBar(props){
  return(
    <div className="actionBar">
      <div className="search">
        <IoIosSearch size="24px"/>
        <input/>
      </div>
      <div className="button positive" onClick={() => props.callback("add")}>
        <IoIosAddCircle size="24px"/>
        <p>Add a Customer</p>
      </div>
    </div>
  )
}