import React, { useState } from "react";
import ActionBar from "../SubModules/ActionBar";
import Modal from "../SubModules/Modal";
import Table from "../SubModules/Table";
import AddForm from "./AddForm";
import data from "../../dummyData/items.json";
import Breadcrumbs from "../SubModules/Breadcrumbs";

export default function Items(props) {
  const [modal, setModal] = useState(false);
  const [subModule, setSubModule] = useState("table");
  const [modalContents, setModalContents] = useState("delete");

  return (
    <>
      <Modal open={modal} modalCallback={setModal}>
        {modalContents === "delete" ? (
          <>
            <p>Are you sure you want to delete this item?</p>
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
        header="Items"
        subModule="Create an Item"
        callback={setSubModule}
      />
      <ActionBar
        callback={() => {
          setModalContents("add");
          setModal(true);
        }}
        addLabel="Create an Item"
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
