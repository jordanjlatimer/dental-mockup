import React from "react";

export default function TextareaInput(props) {
  return (
    <div className="textareaInput">
      <p>{props.label}</p>
      <textarea className="textareaControl" />
    </div>
  );
}
