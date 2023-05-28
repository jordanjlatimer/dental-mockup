import React from "react";
import { useState } from "react";

export default function RadioGroup(props) {
  const [selected, setSelected] = useState(-1);

  return (
    <div className="radioGroup">
      <p className="radioGroupLabel">{props.label}</p>
      <div className="radioOptions">
        {React.Children.map(props.children, (child, index) => {
          return React.cloneElement(child, {
            selected: selected === index,
            callback: () => setSelected(index),
          });
        })}
      </div>
    </div>
  );
}
