import React from 'react';
import { DateAndTime } from './styles';

const OpensAt = props => {

  return (
    <div className="container">
      <DateAndTime>
        {props.info}
      </DateAndTime>
    </div>
  );
};

export default OpensAt;
