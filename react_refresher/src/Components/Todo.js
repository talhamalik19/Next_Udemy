import React, { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

export default function Todo(props) {
  const [modalOpen, setModalOpen] = useState(false);

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div className="card">
        <h1>{props.text}</h1>
        <button className="btn" onClick={() => setModalOpen(true)}>
          Delete Todo
        </button>

        <Modal
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          closeModal={closeModal}
        />
        <Backdrop modalOpen={modalOpen} setModalOpen={setModalOpen} />
      </div>
    </>
  );
}
