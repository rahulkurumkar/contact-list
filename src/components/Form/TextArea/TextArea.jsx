import React from 'react';
import './TextArea.css';

const TextArea = props => {
  return (
    <div className='text-area-container'>
      <textarea
        className='form-control'
        rows={props.rows}
        cols={props.cols}
        required={props.required}
        placeholder={props.placeHolder}
        onChange={props.onInputChange}
      >
        {props.data}
      </textarea>
    </div>
  );
};

export default TextArea;
