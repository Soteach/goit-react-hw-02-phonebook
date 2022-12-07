import PropTypes from 'prop-types';
import React from 'react';
import { ItemList } from 'components/ItemList/ItemList';
import './ContactList.css';

export const ContactList = ({ contacts, deleteContacts }) => {
  return (
    <>
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

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
// deleteContacts: PropTypes.func.isRequired,
