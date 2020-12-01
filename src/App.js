import React, { useState } from 'react';
import { IoIosBusiness, IoIosCart, IoIosCash, IoIosConstruct, IoIosCube, IoIosPeople, IoIosPie, IoIosSettings, IoIosSpeedometer } from 'react-icons/io';
import Content from './Content';
import Sidebar from './Sidebar/Sidebar'
import SidebarAvatar from './Sidebar/SidebarAvatar';
import SidebarItem from './Sidebar/SidebarItem';

export default function App(){
  const [curMod, setCurMod] = useState("dashboard")

  return(
    <>
      <Sidebar>
        <SidebarAvatar active={curMod === "account"} username="Username" onClick={() => setCurMod("account")}/>
        <SidebarItem active={curMod === "dashboard"} icon={<IoIosSpeedometer size="20px"/>} label="Dashboard" onClick={() => setCurMod("dashboard")}/>
        <SidebarItem active={curMod === "customers"} icon={<IoIosPeople size="20px"/>} label="Patients" onClick={() => setCurMod("customers")}/>
        <SidebarItem active={curMod === "transactions"} icon={<IoIosCash size="20px"/>} label="Transactions" onClick={() => setCurMod("transactions")}/>
        <SidebarItem active={curMod === "orders"} icon={<IoIosCart size="20px"/>} label="Orders" onClick={() => setCurMod("orders")}/>
        <SidebarItem active={curMod === "items"} icon={<IoIosCube size="20px"/>} label="Items" onClick={() => setCurMod("items")}/>
        <SidebarItem active={curMod === "vendors"} icon={<IoIosBusiness size="20px"/>} label="Vendors" onClick={() => setCurMod("vendors")}/>
        <SidebarItem active={curMod === "reports"} icon={<IoIosPie size="20px"/>} label="Reports" onClick={() => setCurMod("reports")}/>
        <SidebarItem active={curMod === "tools"} icon={<IoIosConstruct size="20px"/>} label="Tools" onClick={() => setCurMod("tools")}/>
        <SidebarItem active={curMod === "settings"} icon={<IoIosSettings size="20px"/>} label="Settings" onClick={() => setCurMod("settings")}/>
      </Sidebar>
      <Content module={curMod}/>
    </>
  )
}