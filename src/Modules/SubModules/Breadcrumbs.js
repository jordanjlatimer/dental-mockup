import React from "react";

export default function Breadcrumbs(props) {
  return (
    <div className="breadcrumbs">
      <h1
        className={props.base ? "breadcrumbsHeader" : "breadcrumbsHeader base"}
        onClick={() => props.callback("table")}
      >
        {props.header}
      </h1>
      {props.base ? null : (
        <h2 className="breadcrumbsSubheader">{"/ " + props.subModule}</h2>
      )}
    </div>
  );
}
