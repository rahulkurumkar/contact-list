import React from 'react';
import InputField from '../Form/InputField';

const SearchBar = props => {
  return (
    <InputField
      type='text'
      placeHolder='Search...'
      value={props.value}
      onInputChange={props.onSearchChange}
    />
  );
};

export default SearchBar;
