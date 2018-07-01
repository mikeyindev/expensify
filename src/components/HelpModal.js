import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement(document.getElementById('app'));

const HelpModal = (props) => {
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
        Hotkeys
      </h3>
      <div className="HelpModal__body">
        <p>Press <span className="keyboard-key">Enter</span> to save</p>
        <p>Press <span className="keyboard-key">n</span> to add a new expense</p>
      </div>
      {/*<button
        className="button"
        id="ConfirmationModal__button"
        onClick={props.closeModal}
      >
        Got it!
      </button>*/}
    </Modal>
  );
};

export default HelpModal;
