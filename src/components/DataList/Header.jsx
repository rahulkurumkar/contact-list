import React from 'react';

const Header = props => {
  return (
    <thead>
      <tr>
        {props.data.map((header, index) => (
          <th key={header.title + index}>{header.title}</th>
        ))}
      </tr>
    </thead>
  );
};

export default Header;
