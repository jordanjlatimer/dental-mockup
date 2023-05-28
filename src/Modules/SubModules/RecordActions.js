import React from "react";
import {
  IoIosCart,
  IoIosClipboard,
  IoIosCreate,
  IoIosEye,
  IoIosTrash,
} from "react-icons/io";

export default function RecordActions(props) {
  return (
    <div className="recordActions">
      {props.icons ? (
        props.icons.treatment ? (
          <IoIosClipboard className="treatmentIcon" size="28px" />
        ) : null
      ) : null}
      {props.icons ? (
        props.icons.order ? (
          <IoIosCart className="cartIcon" size="28px" />
        ) : null
      ) : null}
      <IoIosEye className="viewIcon" size="28px" />
      <IoIosCreate className="editIcon" size="28px" />
      <IoIosTrash
        className="trashIcon"
        onClick={() => props.modalCallback(true)}
        size="28px"
      />
    </div>
  );
}
