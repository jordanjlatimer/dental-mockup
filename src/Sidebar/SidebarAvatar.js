import React from 'react'
import { IoIosPerson } from 'react-icons/io'

export default function SidebarAvatar(props){
  return(
    <div className="avatar">
      <IoIosPerson size="80px"/>
      <p>{props.username}</p>
    </div>
  )
}