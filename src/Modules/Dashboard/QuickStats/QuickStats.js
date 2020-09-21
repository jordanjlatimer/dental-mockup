import React from 'react'
import StatCard from './StatCard'

export default function QuickStats(props){
  return(
    <div className="quickStats">
      <StatCard header="Current Inventory Value" value="54,321" money/>
      <StatCard header="Live Orders" value="12"/>
      <StatCard header="Overstocked Products" value="7"/>
      <StatCard header="Average Customer Margin" value="21.4" percentage/>
      <StatCard header="Customer Margins Under 15%" value="16"/>
      <StatCard header="Customers Margins Over 30%" value="5"/>
      <StatCard header="Vendors" value="23"/>
      <StatCard header="Average Customer Inventory Cost" value="234" money/>
    </div>
  )
}
