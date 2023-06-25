import React from 'react';

const validationComponent = (props) => {

  let validationMsg = '';
  validationMsg = props.textLength > 5? 'Text is long enough'
    : 'Text is too short';

  return (
      <p>
        {validationMsg}
      </p>
    );


};

export default validationComponent;
