import React from 'react'
import { IoIosPerson } from 'react-icons/io'

export default function SidebarAvatar(props){
  return(
    <div className={props.active ? "avatar active" : "avatar"} onClick={props.onClick}>
      <IoIosPerson size="80px"/>
      <p className="username">{props.username}</p>
    </div>
  )
}