import React from 'react';
import { ItemList } from 'components/ItemList/ItemList';
import './Contacts.css';

export const Contacts = ({ names }) => {
  return (
    <>
      <h2 className="ContactsHeader">Contacts</h2>
      <ul className="Container">
        {names.map(name => (
          <ItemList key={name.id} name={name.name} number={name.number} />
        ))}
      </ul>
    </>
  );
};
