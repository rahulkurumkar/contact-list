import React from 'react';

import './InputField.css';

const InputField = props => {
  return (
    <div className='input-container'>
      <input
        className='form-control'
        style={{ width: '100%' }}
        type={props.type}
        required={props.required}
        value={props.value}
        placeholder={props.placeHolder}
        onChange={props.onInputChange}
      />
    </div>
  );
};

export default InputField;
