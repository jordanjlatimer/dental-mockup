import React from 'react';
import { IoIosCloseCircle } from 'react-icons/io';

export default function Modal(props){

  return(
    <div className={props.open ? "modal open" : "modal"}>
      <div className="modalContents">
        <div className="closeModal" onClick={() => props.modalCallback(false)}>
          <IoIosCloseCircle size="20px"/>
        </div>
        {props.children}
      </div>
    </div>
  )
}