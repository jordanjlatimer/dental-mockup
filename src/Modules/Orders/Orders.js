import React, {useState} from 'react';
import ActionBar from '../SubModules/ActionBar';
import Modal from '../SubModules/Modal';
import Table from '../SubModules/Table';

export default function Orders(props){
  const [modal, setModal] = useState(false);

  return(
    <>
      <Modal open={modal} modalCallback={setModal}>
        <p>Are you sure you want to delete this order?</p>
        <div className="modalActions">
          <div className="button positive">Yes</div>
          <div className="button negative" onClick={() => setModal(false)}>No</div>
        </div>
      </Modal>
      <h1 className="moduleTitle">Orders</h1>
      <ActionBar/>
      <Table
        data={{
          headers: ["Vendor", "Status", "Total Cost", "Date Placed", "Date Received"],
          rows: [
            ["Dentsply Sirona", "Placed", "$2400", "08/09/2020", "-"],
            ["Zahn", "Placed", "$1765", "0/18/2020", "-"],
            ["Argen", "Received", "$2345", "05/01/2020", "05/12/2020"],
            ["Straumann", "Received", "$1345", "06/24/2020", "06/29/2020"],
            ["Nobel Biocare", "Cancelled", "$200", "12/02/2019", "12/11/2019"],
          ]
        }}
        modalCallback={setModal}
      />
    </>
  )
}