import React from 'react';

const DropDown = props => {
  return (
    <div class='dropdown'>
      <button
        class='btn btn-primary dropdown-toggle'
        type='button'
        data-toggle='dropdown'
      >
        {props.label}
        <span class='caret' />
      </button>
      <ul class='dropdown-menu'>
        <li>
          <a href='#'>HTML</a>
        </li>
        <li>
          <a href='#'>CSS</a>
        </li>
        <li>
          <a href='#'>JavaScript</a>
        </li>
      </ul>
    </div>
  );
};

export default DropDown;
