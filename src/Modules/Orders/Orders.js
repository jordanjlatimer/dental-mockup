import React, {useState} from 'react';
import ActionBar from '../SubModules/ActionBar';
import Modal from '../SubModules/Modal';
import Table from '../SubModules/Table';
import AddForm from './AddForm';
import data from '../../dummyData/orders.json'
import Breadcrumbs from '../SubModules/Breadcrumbs';

export default function Orders(props){
  const [modal, setModal] = useState(false);
  const [subModule, setSubModule] = useState("table")

  return(
    <>
      <Modal open={modal} modalCallback={setModal}>
        <p>Are you sure you want to delete this order?</p>
        <div className="modalActions">
          <div className="button positive">Yes</div>
          <div className="button negative" onClick={() => setModal(false)}>No</div>
        </div>
      </Modal>
      <Breadcrumbs base={subModule === "table"} header="Orders" subModule="Create an Order" callback={setSubModule}/>
      {subModule === "table" ? (
        <>
          <ActionBar callback={setSubModule} addLabel="Create an Order"/>
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