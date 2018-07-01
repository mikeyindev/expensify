import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement(document.getElementById("app"));

const ConfirmationModal = (props) => {

  // console.log(props);
  return (
    // onRequestClose allows users to click outside the modal or hit the esc button to close the modal
    <Modal
      isOpen={props.modalIsOpen}
      onRequestClose={props.closeModal}
      // closeTimeoutMS={200}
      className="ConfirmationModal"
    >
      <h3 className="ConfirmationModal__title">
        Are you sure you want to delete the expense?
      </h3>
      <button
        className="button"
        id="ConfirmationModal__button"
        onClick={props.startRemoveExpense}
      >
        Yes
      </button>
      <button className="button--remove" onClick={props.closeModal}>
        No
      </button>
    </Modal>
  );
};

export default ConfirmationModal;