import React, { useState } from 'react';
import { IoIosBusiness, IoIosCart, IoIosClipboard, IoIosCube, IoIosPeople, IoIosSpeedometer } from 'react-icons/io';
import Content from './Content';
import Sidebar from './Sidebar/Sidebar'
import SidebarAvatar from './Sidebar/SidebarAvatar';
import SidebarItem from './Sidebar/SidebarItem';

export default function App(){
  const [curMod, setCurMod] = useState("customers")

  return(
    <>
      <Sidebar>
        <SidebarAvatar username="Username"/>
        <SidebarItem active={curMod === "dashboard"} icon={<IoIosSpeedometer size="20px"/>} label="Dashboard" onClick={() => setCurMod("dashboard")}/>
        <SidebarItem active={curMod === "customers"} icon={<IoIosPeople size="20px"/>} label="Customers" onClick={() => setCurMod("customers")}/>
        <SidebarItem active={curMod === "treatments"} icon={<IoIosClipboard size="20px"/>} label="Treatments" onClick={() => setCurMod("treatments")}/>
        <SidebarItem active={curMod === "orders"} icon={<IoIosCart size="20px"/>} label="Orders" onClick={() => setCurMod("orders")}/>
        <SidebarItem active={curMod === "items"} icon={<IoIosCube size="20px"/>} label="Items" onClick={() => setCurMod("items")}/>
        <SidebarItem active={curMod === "vendors"} icon={<IoIosBusiness size="20px"/>} label="Vendors" onClick={() => setCurMod("vendors")}/>
      </Sidebar>
      <Content module={curMod}/>
    </>
  )
}