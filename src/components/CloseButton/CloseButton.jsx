import React from 'react';
import './CloseButton.scss';

const CloseButton = props => {

  return (
    <div className="close-button" onClick={props.toggleModal}>
      <span className="line" />
      <span className="line" />
    </div>
  );
};

export default CloseButton;
