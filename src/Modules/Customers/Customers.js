import React, { useState } from 'react';
import ActionBar from '../SubModules/ActionBar';
import CreationForm from './CreationForm';
import Modal from '../SubModules/Modal';
import Table from '../SubModules/Table';

const data = {
  headers: ["Name", "Profit Margin", "Total Profit", "Last Procedure"],
  rows: [
    ["Jimmy", "17.5%", "$2400", "08/09/2020"],
    ["Pheobe", "16.2%", "$1765", "02/18/2020"],
    ["Freddy", "22.1%", "$870", "05/01/2020"],
    ["Jerry", "19.0%", "$560", "06/24/2020"],
    ["Amy", "20.8%", "$3190", "12/02/2019"],
  ]
}

export default function Customers(props){
  const [modal, setModal] = useState(false);
  const [subModule, setSubModule] = useState("table")

  return(
    <>
      <Modal open={modal} modalCallback={setModal}>
        <p>Are you sure you want to delete this customer?</p>
        <div className="modalActions">
          <div className="button positive">Yes</div>
          <div className="button negative" onClick={() => setModal(false)}>No</div>
        </div>
      </Modal>
      <h1 className="moduleTitle">Customers</h1>
      {subModule === "table" ? (
        <>
          <ActionBar callback={setSubModule}/>
          <Table
            data={data}
            modalCallback={setModal}
            recActProps={{treatment: true}}
          />
        </>
      ) : (
        <CreationForm/>
      )}
    </>
  )
}