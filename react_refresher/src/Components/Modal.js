import React from "react";

export default function Modal(props) {
  return (
    <>
      {props.modalOpen && (
        <div className="modal">
          <h1>Are you Sure</h1>
          <div>
            <button className="btn btn__alt" onClick={() => props.closeModal()}>
              Cancel
            </button>
            <button className="btn" onClick={() => props.closeModal()}>
              Confirm
            </button>
          </div>
        </div>
      )}
    </>
  );
}
