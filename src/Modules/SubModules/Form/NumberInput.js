import React from "react";

export default function NumberInput(props) {
  return (
    <div className="numberInput">
      <p>{props.label}</p>
      <input
        className={
          props.money ? "numberInputControl money" : "numberInputControl"
        }
        type="number"
      />
      {props.money ? <div className="moneyIcon">$</div> : null}
    </div>
  );
}
