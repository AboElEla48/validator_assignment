import React from 'react';
import '../Styles/CompStyles.css'

const charComponent = (props) => {
  return (
    <span
      className='innerDisplayStyle'
      onClick= {props.removalHandler}>
      {props.char}
    </span>
  );
};

export default charComponent;
