import React from 'react';

const Row = props => {
  let rowData = { ...props.data };
  delete rowData.id;
  let valueList = Object.values(rowData);
  return (
    <tr>
      {valueList.map((record, index) => (
        <td key={record + index}>{record}</td>
      ))}
    </tr>
  );
};

export default Row;
