import React from "react";

export default function Backdrop(props) {
  return (
    <>
      {props.modalOpen && (
        <div
          className="backdrop"
          onClick={() => props.setModalOpen(false)}
        ></div>
      )}
    </>
  );
}
