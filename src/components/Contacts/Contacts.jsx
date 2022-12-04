import React from 'react';
import './Contacts.css';

export const Contacts = ({ names }) => {
  return (
    <>
      <h2 className="ContactsHeader">Contacts</h2>
      <ul className="Container">
        {names.map(name => (
          <li key={name.id} className="">
            {name.name}
          </li>
        ))}
      </ul>
    </>
  );
};
