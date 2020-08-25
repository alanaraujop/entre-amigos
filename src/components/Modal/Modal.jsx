import React from 'react';
import { CloseIcon } from '..';
import './Modal.scss';

const Modal = props => {
  const { toggleModal, small, content, size } = props;

  return (
    <div className="modal-container" >
      <div className={`modal ${small ? 'small' : ''}`}>

        <div className="modal-header">
          <h2>Entre Amigos</h2>

          <CloseIcon 
            event={toggleModal} 
            size={size ? size : 48} 
          />
        </div>

        <div className="text-container">
          {typeof content === 'function' ? content() : content}
        </div>

      </div>
    </div>
  );
}

export default Modal;
