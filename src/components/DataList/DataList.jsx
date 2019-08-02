import React from 'react';

import Header from './Header';
import Row from './Row';

const DataList = props => {
  return (
    <table className='table table-hover'>
      <Header data={props.headers} />
      <tbody>
        {props.data.map(row => (
          <Row key={row.id} data={row} />
        ))}
      </tbody>
    </table>
  );
};

export default DataList;
