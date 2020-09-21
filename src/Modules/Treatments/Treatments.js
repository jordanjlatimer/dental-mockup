import React, { useState } from 'react';
import ActionBar from '../SubModules/ActionBar';
import Modal from '../SubModules/Modal';
import Table from '../SubModules/Table';

export default function Treatments(props){
  const [modal, setModal] = useState(false);

  return(
    <>
      <Modal open={modal} modalCallback={setModal}>
        <p>Are you sure you want to delete this treatment?</p>
        <div className="modalActions">
          <div className="button positive">Yes</div>
          <div className="button negative" onClick={() => setModal(false)}>No</div>
        </div>
      </Modal>
      <h1 className="moduleTitle">Treatments</h1>
      <ActionBar/>
      <Table
        data={{
          headers: ["ID", "Category", "Customer", "Profit Margin", "Total", "Date"],
          rows: [
            ["12990", "Root Canal", "Jimmy", "17.5%", "$2400", "08/09/2020"],
            ["49480", "Implant", "Pheobe", "16.2%", "$1765", "02/18/2020"],
            ["65938", "Crown", "Freddy", "22.1%", "$870", "05/01/2020"],
            ["23567", "Implant", "Jerry", "19.0%", "$560", "06/24/2020"],
            ["15342", "Implant", "Amy", "20.8%", "$3190", "12/02/2019"],
          ]
        }}
        modalCallback={setModal}
        recordDesc="this customer"
      />
    </>
  )
}