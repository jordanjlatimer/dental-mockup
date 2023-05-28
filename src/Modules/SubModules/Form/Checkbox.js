import React, { useState } from "react";

export default function Checkbox(props) {
  const [checked, setChecked] = useState(props.checked);

  return (
    <div className="checkbox" onClick={() => setChecked(!checked)}>
      <p className="checkboxLabel">{props.label}</p>
      <div className="outerCheckbox">
        <div className={checked ? "innerCheckbox checked" : "innerCheckbox"} />
      </div>
    </div>
  );
}
