import React, {useState} from 'react';
import ActionBar from '../SubModules/ActionBar';
import Modal from '../SubModules/Modal';
import Table from '../SubModules/Table';
import data from './mockData.json'

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
        data={data}
        modalCallback={setModal}
        showId
      />
    </>
  )
}