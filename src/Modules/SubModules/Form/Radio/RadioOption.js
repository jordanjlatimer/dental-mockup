import React from "react";

export default function RadioOption(props) {
  return (
    <div
      className={props.selected ? "radioOption selected" : "radioOption"}
      onClick={props.callback}
    >
      {props.value}
    </div>
  );
}
