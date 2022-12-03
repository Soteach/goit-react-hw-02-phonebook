import React from 'react';
import './Contacts.css';

export const Contacts = ({ data }) => {
  return (
    <>
      <h2 className="ContactsHeader">Contacts</h2>
      <ul className="Container">
        <li className="">{data}</li>
      </ul>
    </>
  );
};
