import React, {useState} from 'react';
import ActionBar from '../SubModules/ActionBar';
import Modal from '../SubModules/Modal';
import Table from '../SubModules/Table';

export default function Items(props){
  const [modal, setModal] = useState(false);

  return(
    <>
      <Modal open={modal} modalCallback={setModal}>
        <p>Are you sure you want to delete this item?</p>
        <div className="modalActions">
          <div className="button positive">Yes</div>
          <div className="button negative" onClick={() => setModal(false)}>No</div>
        </div>
      </Modal>
      <h1 className="moduleTitle">Items</h1>
      <ActionBar/>
      <Table
        data={{
          headers: ["Name", "Vendor", "Category", "Cost", "On Hand", "On Order", "Min", "Max"],
          rows: [
            ["Titanium Abutment", "Dentsply Sirona", "Implant", "$120", "3", "2", "4", "6"],
            ["Exam Gloves", "Zahn", "Safety", "$120", "8", "2", "10", "14"],
            ["Carbide Burr", "Zahn", "Rotary", "$32", "20", "0", "15", "30"],
            ["Healing Cap", "Straumann", "Implant", "$80", "1", "2", "2", "4"],
            ["Bone Level Implant", "Nobel Biocare", "Implant", "$235", "2", "0", "2", "4"],
          ]
        }}
        modalCallback={setModal}
      />
    </>
  )
}