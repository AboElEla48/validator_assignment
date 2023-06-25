import React from 'react';

const validationComponent = (props) => {

  return (
      <div>
        {props.textLength > 5? 'Text is too long'
          : 'Text is too short'}
      </div>
    );


};

export default validationComponent;
