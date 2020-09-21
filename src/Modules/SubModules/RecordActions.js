import React from "react"
import { IoIosCart, IoIosClipboard, IoIosCreate, IoIosEye, IoIosTrash } from "react-icons/io"

export default function RecordActions(props){
  return(
    <div className="recordActions">
      {props.icons ? (props.icons.treatment ? <IoIosClipboard className="treatmentIcon" size="20px"/> : null) : null}
      {props.icons ? (props.icons.order ? <IoIosCart className="cartIcon" size="20px"/> : null) : null}
      <IoIosEye className="viewIcon" size="20px"/>
      <IoIosCreate className="editIcon" size="20px"/>
      <IoIosTrash 
        className="trashIcon"
        onClick={() => props.modalCallback(true)} size="20px"
      />
    </div>
  )
}