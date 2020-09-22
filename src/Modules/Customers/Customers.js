import React, { useState } from 'react';
import ActionBar from '../SubModules/ActionBar';
import AddForm from './AddForm';
import Modal from '../SubModules/Modal';
import Table from '../SubModules/Table';
import data from "../../dummyData/customers.json"
import Breadcrumbs from '../SubModules/Breadcrumbs';

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
      <Breadcrumbs base={subModule === "table"} header="Customers" subModule="Create a Customer" callback={setSubModule}/>
      {subModule === "table" ? (
        <>
          <ActionBar callback={setSubModule} addLabel="Create a Customer"/>
          <Table
            data={data}
            modalCallback={setModal}
            recActProps={{treatment: true}}
          />
        </>
      ) : (
        <AddForm/>
      )}
    </>
  )
}