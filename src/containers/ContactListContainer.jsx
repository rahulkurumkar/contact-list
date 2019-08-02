import React, { Component } from 'react';
import AddContact from '../components/AddContact';
import DataList from '../components/DataList';
import SearchBar from '../components/SearchBar';
import uniqueId from 'lodash/uniqueId';

export default class ContactListContainer extends Component {
  constructor(props) {
    super(props);
    const listData = [
      {
        id: 1,
        name: 'John Doe',
        phone: '111-444-333',
        email: 'john@doe.com',
        address: 'USA'
      },
      {
        id: 2,
        name: 'Jane Doe',
        phone: '123-343-124',
        email: 'jane@doe.com',
        address: 'India'
      }
    ];

    this.state = {
      query: '',
      headers: [
        {
          title: 'Name',
          icon: ''
        },
        { title: 'Phone', icon: '' },
        { title: 'Email', icon: '' },
        {
          title: 'Address'
        }
      ],
      filteredList: listData,
      list: listData,
      toggleAddContact: true
    };
  }

  onSearchChange = event => {
    const query = event.target.value;
    this.setState({
      query,
      filteredList: this.state.list.filter(record => {
        return record.name.includes(query) ? true : false;
      })
    });
  };

  onAddContact = contact => {
    this.setState({
      toggleAddContact: true,
      list: this.state.list.concat([
        {
          id: uniqueId(),
          name: `${contact.firstName} ${contact.lastName}`,
          phone: contact.phone,
          email: contact.email,
          address: contact.address
        }
      ]),
      filteredList: this.state.list.concat([
        {
          id: uniqueId(),
          name: `${contact.firstName} ${contact.lastName}`,
          phone: contact.phone,
          email: contact.email,
          address: contact.address
        }
      ])
    });
  };

  toggleAddContactForm = () => {
    this.setState({
      toggleAddContact: !this.state.toggleAddContact
    });
  };

  render() {
    const addContactClass = this.state.toggleAddContact
      ? 'row collapse'
      : 'row expand';
    return (
      <div className='container'>
        <div className='row'>
          <h1>Contact List</h1>
        </div>
        <button
          type='button'
          className='btn btn-info'
          onClick={this.toggleAddContactForm}
        >
          Add Contact Information
        </button>
        <div className={addContactClass}>
          <br />
          <br />
          <AddContact onAddContact={this.onAddContact} />
        </div>
        <br />
        <br />
        <div className='row'>
          <div className='col-sm-9 col-md-9 col-xl-9'>
            <SearchBar
              value={this.state.query}
              onSearchChange={this.onSearchChange}
            />
          </div>
        </div>
        <br />
        <div className='row'>
          <DataList
            data={this.state.filteredList}
            headers={this.state.headers}
          />
        </div>
      </div>
    );
  }
}
