import React from 'react';
import '../Styles/CompStyles.css'

const charComponent = (props) => {
  return (
    <div className='innerDisplayStyle'>
      {props.char}
    </div>
  );
};

export default charComponent;
