import React from 'react';
import '../Styles/CompStyles.css'

const charComponent = (props) => {
  return (
    <div
      className='innerDisplayStyle'
      onClick= {props.removalHandler}>
      {props.char}
    </div>
  );
};

export default charComponent;
