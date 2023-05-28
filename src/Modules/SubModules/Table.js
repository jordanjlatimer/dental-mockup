import React, { useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import RecordActions from "./RecordActions";

export default function Table(props) {
  const [activeRow, setActiveRow] = useState(null);
  const [data, setData] = useState(props.data);
  const [sort, setSort] = useState({ key: null, dir: null });

  return (
    <table className="moduleTable">
      <thead>
        <tr>
          {Object.keys(data[0]).map((key) => {
            return (
              <th
                className="moduleTableHeader"
                key={key}
                onClick={() => {
                  if (sort.key === key) {
                    if (sort.dir === "asc") {
                      let headerRow = data[0];
                      let curArray = data.slice(1);
                      curArray.sort((a, b) => (a[key] > b[key] ? -1 : 1));
                      curArray.unshift(headerRow);
                      setSort({ key: key, dir: "desc" });
                      setData(curArray);
                    } else {
                      let headerRow = data[0];
                      let curArray = data.slice(1);
                      curArray.sort((a, b) => (a[key] > b[key] ? 1 : -1));
                      curArray.unshift(headerRow);
                      setSort({ key: key, dir: "asc" });
                      setData(curArray);
                    }
                  } else {
                    let headerRow = data[0];
                    let curArray = data.slice(1);
                    curArray.sort((a, b) => (a[key] > b[key] ? 1 : -1));
                    curArray.unshift(headerRow);
                    setSort({ key: key, dir: "asc" });
                    setData(curArray);
                  }
                }}
              >
                {data[0][key]}
                {sort.key === key ? (
                  sort.dir === "asc" ? (
                    <IoMdArrowDropdown className="sortIcon" />
                  ) : (
                    <IoMdArrowDropup className="sortIcon" />
                  )
                ) : null}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {data.slice(1).map((row, i) => {
          return (
            <tr
              key={row["id"]}
              onClick={() =>
                activeRow === row["id"]
                  ? setActiveRow(null)
                  : setActiveRow(row["id"])
              }
              className={
                activeRow === row["id"]
                  ? "moduleTableRow active"
                  : "moduleTableRow"
              }
            >
              {Object.keys(row).map((key, j) => {
                return props.showId ? (
                  <td key={key} className="moduleTableCell">
                    {row[key]}
                    {j === Object.keys(row).length - 1 &&
                    activeRow === row["id"] ? (
                      <RecordActions
                        recordDesc={props.recordDesc}
                        modalCallback={props.modalCallback}
                        icons={props.recActProps}
                      />
                    ) : null}
                  </td>
                ) : key === "id" ? null : (
                  <td key={key} className="moduleTableCell">
                    {row[key]}
                    {j === Object.keys(row).length - 1 &&
                    activeRow === row["id"] ? (
                      <RecordActions
                        recordDesc={props.recordDesc}
                        modalCallback={props.modalCallback}
                        icons={props.recActProps}
                      />
                    ) : null}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
