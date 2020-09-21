import React from 'react';
import Customers from './Modules/Customers/Customers';
import Dashboard from './Modules/Dashboard/Dashboard';
import Treatments from './Modules/Treatments/Treatments'
import Items from './Modules/Items/Items';
import Orders from './Modules/Orders/Orders';
import Vendors from './Modules/Vendors/Vendors';

export default function Content(props){
  return(
    <div className="content">
        {props.module === "dashboard" ? <Dashboard/> : 
        props.module === "customers" ? <Customers/> : 
        props.module === "treatments" ? <Treatments/> :
        props.module === "orders" ? <Orders/> : 
        props.module === "items" ? <Items/> :
        props.module === "vendors" ? <Vendors/> : null}
    </div>
  )
}