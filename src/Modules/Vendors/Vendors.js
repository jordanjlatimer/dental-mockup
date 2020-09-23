import React, { useState } from 'react';
import ActionBar from '../SubModules/ActionBar';
import Modal from '../SubModules/Modal';
import Table from '../SubModules/Table';
import AddForm from './AddForm';
import data from '../../dummyData/vendors.json'
import Breadcrumbs from '../SubModules/Breadcrumbs';

export default function Vendors(props){
  const [modal, setModal] = useState(false);
  const [modalContents, setModalContents] = useState("delete")
  const [subModule, setSubModule] = useState("table")

  return(
    <>
      <Modal open={modal} modalCallback={setModal}>
        {modalContents === "delete" ? (
          <>
            <p>Are you sure you want to delete this vendor?</p>
            <div className="modalActions">
              <div className="button positive">Yes</div>
              <div className="button negative" onClick={() => setModal(false)}>No</div>
            </div>
          </>
        ) : <AddForm/>
        }
      </Modal>
      <Breadcrumbs base={subModule === "table"} header="Vendors" subModule="Create a Vendor" callback={setSubModule}/>
      <ActionBar callback={() => {setModalContents("add"); setModal(true);}} addLabel="Create a Vendor"/>
      <Table
        data={data}
        modalCallback={() => {setModal(true); setModalContents("delete");}}
        recActProps={{treatment: true}}
      />
    </>
  )
}