import PropTypes from 'prop-types';
import './Contacts.css';
import { Component } from 'react';
import { Filter } from 'components/Filter/Filter';
import React from 'react';
import { ItemList } from 'components/ItemList/ItemList';
import './Contacts.css';

export const Contacts = ({ contacts, deleteContacts }) => {
  return (
    <>
      <h2 className="ContactsHeader">Contacts</h2>
      <ul className="Container">
        {contacts.map(({ id, name, number }) => (
          <ItemList key={id} name={name} number={number} />
        ))}
      </ul>
      <button type="button" onClick={() => deleteContacts(contacts.id)}>
        Delete
      </button>
    </>
  );
};

// Contacts.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//       id: PropTypes.string.isRequired,
//     })
//   ),
//   // deleteContacts: PropTypes.func.isRequired,
