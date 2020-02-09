import React from 'react';

const CloseButton = props => {

  return (
    <div className="closeButton" onClick={props.toggleModal}>
      <span className="line" />
      <span className="line" />
    </div>
  );
}

export default CloseButton;
