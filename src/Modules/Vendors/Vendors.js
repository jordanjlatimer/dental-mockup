import React, { useState } from 'react';
import ActionBar from '../SubModules/ActionBar';
import Modal from '../SubModules/Modal';
import Table from '../SubModules/Table';

export default function Vendors(props){
  const [modal, setModal] = useState(false);

  return(
    <>
      <Modal open={modal} modalCallback={setModal}>
        <p>Are you sure you want to delete this vendor?</p>
        <div className="modalActions">
          <div className="button positive">Yes</div>
          <div className="button negative" onClick={() => setModal(false)}>No</div>
        </div>
      </Modal>
      <h1 className="moduleTitle">Vendors</h1>
      <ActionBar/>
      <Table
        data={{
          headers: ["Name", "Phone Number", "Email", "Address", "Number of Items We Order", "Shipping Cost"],
          rows: [
            ["Dentsply Sirona", "800-123-4567", "dentsply@sirona.com", "123 Dentsply Road", "11", "$7.99"],
            ["Argen", "800-234-5678", "argen@email.com", "123 Argen Road", "8", "Free"],
            ["Henry Schein", "800-345-6789", "henry@schein.com", "123 Henry Road", "29", "$5.99"],
            ["Straumann", "800-456-7890", "straumann@email.com", "123 Straumann Road", "7", "$11.99"],
            ["Nobel Biocare", "800-567-8901", "nobel@biocare.com", "123 Nobel Road", "16", "$2.50"]
          ]
        }}
        modalCallback={setModal}
        recActProps={{order: true}}
      />
    </>
  )
}