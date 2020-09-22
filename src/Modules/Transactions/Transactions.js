import React, { useState } from 'react';
import ActionBar from '../SubModules/ActionBar';
import Modal from '../SubModules/Modal';
import Table from '../SubModules/Table';
import AddForm from './CreationForm';
import data from '../../dummyData/transactions.json'
import Breadcrumbs from '../SubModules/Breadcrumbs';

export default function Transactions(props){
  const [modal, setModal] = useState(false);
  const [subModule, setSubModule] = useState("table")

  return(
    <>
      <Modal open={modal} modalCallback={setModal}>
        <p>Are you sure you want to delete this transaction?</p>
        <div className="modalActions">
          <div className="button positive">Yes</div>
          <div className="button negative" onClick={() => setModal(false)}>No</div>
        </div>
      </Modal>
      <Breadcrumbs base={subModule === "table"} header="Transactions" subModule="Create a Transaction" callback={setSubModule}/>
      {subModule === "table" ? (
        <>
          <ActionBar callback={setSubModule} addLabel="Create a Transaction"/>
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