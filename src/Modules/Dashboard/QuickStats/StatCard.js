import React from "react";

export default function StatCard(props) {
  return (
    <div className="statCard">
      <h1 className="statCardValue">
        {(props.money ? "$" : "") + props.value + (props.percentage ? "%" : "")}
      </h1>
      <h2 className="statCardLabel">{props.header}</h2>
    </div>
  );
}
