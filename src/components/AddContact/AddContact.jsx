import React, { useState } from 'react';

import InputField from '../Form/InputField';
import TextArea from '../Form/TextArea';

const AddContact = props => {
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    address: '',
    pin: [1, 2, 3, 4, 5]
  });

  const handleInputChange = (key, event) => {
    setData({
      ...data,
      [key]: event.target.value
    });
  };

  const addContact = () => {
    props.onAddContact(data);
    setData({
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      address: ''
    });
  };

  return (
    <div className='container'>
      <form onSubmit={addContact}>
        <div className='form-group row'>
          <div className='col-xl-3 col-m-4 col-sm-6'>
            <InputField
              type='input'
              name='firstName'
              placeHolder='First Name'
              required
              value={data.firstName}
              onInputChange={handleInputChange.bind(this, 'firstName')}
            />
          </div>
          <div className='col-xl-3 col-m-4 col-sm-6'>
            <InputField
              type='input'
              name='lastName'
              placeHolder='Last Name'
              required
              value={data.lastName}
              onInputChange={handleInputChange.bind(this, 'lastName')}
            />
          </div>
          <div className='col-xl-3 col-m-4 col-sm-6'>
            <InputField
              type='number'
              name='phone'
              placeHolder='Phone'
              required
              value={data.phone}
              onInputChange={handleInputChange.bind(this, 'phone')}
            />
          </div>
        </div>
        <div className='row'>
          <div className='col-xl-3 col-m-4 col-sm-6'>
            <InputField
              type='email'
              name='email'
              placeHolder='Email'
              required
              value={data.email}
              onInputChange={handleInputChange.bind(this, 'email')}
            />
          </div>
          <div className='col-xl-3 col-m-4 col-sm-6'>
            <TextArea
              name='address'
              placeHolder='Address'
              required
              value={data.address}
              rows={3}
              cols={31}
              onInputChange={handleInputChange.bind(this, 'address')}
            />
          </div>
        </div>
      </form>
      <button type='submit' className='btn btn-primary' onClick={addContact}>
        Add
      </button>
    </div>
  );
};

export default AddContact;
