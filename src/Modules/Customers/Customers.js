import React, { useState } from "react";
import ActionBar from "../SubModules/ActionBar";
import AddForm from "./AddForm";
import Modal from "../SubModules/Modal";
import Table from "../SubModules/Table";
import data from "../../dummyData/customers.json";
import Breadcrumbs from "../SubModules/Breadcrumbs";

export default function Customers(props) {
  const [modal, setModal] = useState(false);
  const [modalContents, setModalContents] = useState("delete");
  const [subModule, setSubModule] = useState("table");

  return (
    <>
      <Modal open={modal} modalCallback={setModal}>
        {modalContents === "delete" ? (
          <>
            <p>Are you sure you want to delete this customer?</p>
            <div className="modalActions">
              <div className="button positive">Yes</div>
              <div className="button negative" onClick={() => setModal(false)}>
                No
              </div>
            </div>
          </>
        ) : (
          <AddForm />
        )}
      </Modal>
      <Breadcrumbs
        base={subModule === "table"}
        header="Patients"
        subModule="Create a Customer"
        callback={setSubModule}
      />
      <ActionBar
        callback={() => {
          setModalContents("add");
          setModal(true);
        }}
        addLabel="Create a Patient"
      />
      <Table
        data={data}
        modalCallback={() => {
          setModal(true);
          setModalContents("delete");
        }}
        recActProps={{ treatment: true }}
      />
    </>
  );
}
