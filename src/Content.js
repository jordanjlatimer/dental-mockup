import React from "react";
import Customers from "./Modules/Customers/Customers";
import Dashboard from "./Modules/Dashboard/Dashboard";
import Items from "./Modules/Items/Items";
import Orders from "./Modules/Orders/Orders";
import Transactions from "./Modules/Transactions/Transactions";
import Vendors from "./Modules/Vendors/Vendors";

export default function Content(props) {
  return (
    <div className="content">
      {props.module === "dashboard" ? (
        <Dashboard />
      ) : props.module === "customers" ? (
        <Customers />
      ) : props.module === "orders" ? (
        <Orders />
      ) : props.module === "transactions" ? (
        <Transactions />
      ) : props.module === "items" ? (
        <Items />
      ) : props.module === "vendors" ? (
        <Vendors />
      ) : null}
    </div>
  );
}
